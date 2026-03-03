import { Connection } from "jsforce";
import { execSync } from "child_process";

let connectionPromise: Promise<Connection> | null = null;

/**
 * Auth strategy priority:
 * 1. SF_USERNAME + SF_PASSWORD → SOAP login (Vercel / production)
 * 2. SF_CLIENT_ID + SF_REFRESH_TOKEN → OAuth2 refresh token
 * 3. SF CLI fallback (local dev)
 */
async function createConnection(): Promise<Connection> {
  const loginUrl = process.env.SF_LOGIN_URL || "https://login.salesforce.com";

  // SOAP username/password login (Vercel / production — no Connected App needed)
  const username = process.env.SF_USERNAME;
  const password = process.env.SF_PASSWORD;
  const securityToken = process.env.SF_SECURITY_TOKEN || "";

  if (username && password) {
    const conn = new Connection({ loginUrl, version: "62.0" });
    await conn.login(username, password + securityToken);
    return conn;
  }

  // OAuth2 refresh token flow (requires Connected App)
  const clientId = process.env.SF_CLIENT_ID;
  const clientSecret = process.env.SF_CLIENT_SECRET;
  const refreshToken = process.env.SF_REFRESH_TOKEN;
  const instanceUrl = process.env.SF_INSTANCE_URL;

  if (clientId && refreshToken && instanceUrl) {
    return new Connection({
      oauth2: {
        loginUrl,
        clientId,
        clientSecret: clientSecret || "",
      },
      instanceUrl,
      refreshToken,
      version: "62.0",
    });
  }

  // SF CLI fallback (local dev)
  const alias = process.env.SF_ORG_ALIAS || "prod";
  const raw = execSync(`sf org display --target-org ${alias} --json`, {
    encoding: "utf-8",
    timeout: 30000,
  });
  const parsed = JSON.parse(raw);
  const result = parsed.result;

  return new Connection({
    instanceUrl: result.instanceUrl,
    accessToken: result.accessToken,
    version: "62.0",
  });
}

export async function getConnection(): Promise<Connection> {
  if (!connectionPromise) {
    connectionPromise = createConnection().catch((err) => {
      connectionPromise = null;
      throw err;
    });
  }
  return connectionPromise;
}

export async function getInstanceUrl(): Promise<string> {
  const conn = await getConnection();
  return conn.instanceUrl;
}

export function resetConnection(): void {
  connectionPromise = null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function queryAll<T>(soql: string): Promise<T[]> {
  const conn = await getConnection();
  const result = await conn.query(soql, { autoFetch: true, maxFetch: 10000 });
  return result.records as unknown as T[];
}
