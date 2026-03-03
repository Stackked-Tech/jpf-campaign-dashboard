# QuickBooks Online Integration — Draft Invoice Creation

## Context
Add a "Create and send invoices" button to each month group on the Invoices tab. When clicked, it creates draft invoices in QuickBooks Online for payments where Opp Type = "Send me an Invoice". Customers are matched by Contact Name. Invoices are saved as drafts (not sent) for testing.

## Prerequisites — QBO Developer App Setup

Before coding, the user must:

1. Go to https://developer.intuit.com → Sign in (or create account)
2. Create a new app → Select "QuickBooks Online and Payments"
3. In app settings, set redirect URI to: `http://localhost:3004/api/qbo/callback` (dev) and `https://<vercel-domain>/api/qbo/callback` (prod)
4. Copy **Client ID** and **Client Secret** from the Keys & credentials section
5. Add to `dashboard/.env.local`:
   ```
   QBO_CLIENT_ID=<client_id>
   QBO_CLIENT_SECRET=<client_secret>
   QBO_REDIRECT_URI=http://localhost:3004/api/qbo/callback
   QBO_ENVIRONMENT=sandbox
   ```
6. Switch `QBO_ENVIRONMENT` to `production` and update redirect URI when going live

## Implementation Plan

### Phase 1: OAuth Infrastructure (4 files)

**1. Install dependency**
```bash
cd dashboard && npm install intuit-oauth
```

**2. `src/lib/quickbooks.ts`** (new) — OAuth client + token management + API helpers
- `getOAuthClient()` — creates intuit-oauth client from env vars
- `tokenStore` — in-memory token cache (module-level variable), with `/tmp/qbo-tokens.json` fallback for serverless cold starts
- `saveTokens(tokens)` / `loadTokens()` — persist to memory + /tmp
- `getQBOClient()` — returns authenticated client, auto-refreshes expired tokens
- `findCustomerByName(name)` — queries QBO `Customer` by `DisplayName`
- `createDraftInvoice(customerId, lineItems)` — creates invoice with `EmailStatus: "NotSet"` (draft)

**3. `src/app/api/qbo/connect/route.ts`** (new) — GET endpoint
- Generates OAuth2 authorization URL with scopes: `com.intuit.quickbooks.accounting`
- Returns `{ authUrl }` for the frontend to redirect

**4. `src/app/api/qbo/callback/route.ts`** (new) — GET endpoint
- Exchanges authorization code for tokens
- Saves tokens + realmId via `saveTokens()`
- Redirects to `/invoices?qbo=connected`

**5. `src/app/api/qbo/status/route.ts`** (new) — GET endpoint
- Returns `{ connected: boolean }` by checking if valid tokens exist

### Phase 2: Invoice Creation API (1 file)

**6. `src/app/api/qbo/invoices/route.ts`** (new) — POST endpoint
- Accepts `{ payments: InvoicePayment[] }` in request body
- Pre-filters to only `Payment_Method__c === "Send me an Invoice"` (server-side safety check)
- Groups payments by Contact Name
- For each contact:
  - Calls `findCustomerByName(contactName)`
  - If customer not found → logs warning, skips (or creates customer — TBD based on preference)
  - Creates draft invoice with line items (one per payment: description = Opportunity Name, amount = Payment Amount)
- Returns `{ created: number, skipped: number, errors: string[] }`

### Phase 3: UI Components (2 files modified)

**7. `src/components/qbo-connect-button.tsx`** (new) — Client component
- Checks `/api/qbo/status` on mount
- If not connected: shows "Connect to QuickBooks" button → calls `/api/qbo/connect` → redirects to Intuit OAuth
- If connected: shows green "QuickBooks Connected" badge

**8. `src/components/invoice-table.tsx`** (modified)
- Add `<QboConnectButton />` near the top (in the summary/filter area)
- Add "Create Invoices" button to each month group header (next to the count/total)
  - Only enabled when QBO is connected
  - On click: POST to `/api/qbo/invoices` with that month's payments
  - Shows loading state during creation
  - Shows success/error toast after completion
  - Button label shows count: "Create Invoices (N eligible)" where N = payments with Opp Type "Send me an Invoice"

### Phase 4: Config Updates (2 files modified)

**9. `src/middleware.ts`** (modified)
- Add `/api/qbo` to the allowed paths list (so QBO routes aren't blocked by auth)

**10. `next.config.ts`** (modified)
- Add `"intuit-oauth"` to `serverExternalPackages` array

## File Summary

| File | Action | Purpose |
|------|--------|---------|
| `src/lib/quickbooks.ts` | Create | OAuth client, token store, QBO API helpers |
| `src/app/api/qbo/connect/route.ts` | Create | Start OAuth flow |
| `src/app/api/qbo/callback/route.ts` | Create | Handle OAuth callback |
| `src/app/api/qbo/status/route.ts` | Create | Check connection status |
| `src/app/api/qbo/invoices/route.ts` | Create | Create draft invoices |
| `src/components/qbo-connect-button.tsx` | Create | Connect/status UI |
| `src/components/invoice-table.tsx` | Modify | Add connect button + "Create Invoices" per month |
| `src/middleware.ts` | Modify | Allow `/api/qbo` routes |
| `next.config.ts` | Modify | Add `intuit-oauth` to external packages |
| `.env.local` | Modify | Add QBO env vars |

## Verification
1. Add QBO env vars to `.env.local` after developer app setup
2. Start dev server → go to Invoices tab → see "Connect to QuickBooks" button
3. Click connect → redirected to Intuit → authorize → redirected back, shows "Connected"
4. Click "Create Invoices" on a month group → draft invoices created in QBO sandbox
5. Log into QBO sandbox → verify draft invoices exist with correct amounts/customers
6. `npx next build` passes
