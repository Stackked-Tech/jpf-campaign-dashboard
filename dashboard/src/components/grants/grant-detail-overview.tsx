import { formatCurrency, formatDate } from "@/lib/utils";
import type { Grant, GrantReport } from "@/lib/grants/types";

interface Props {
  grant: Grant;
  instanceUrl: string;
  nextDueReport: GrantReport | null;
}

function FragmentEntry({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-muted-foreground">{label}</dt>
      <dd>{value}</dd>
    </>
  );
}

export function GrantDetailOverview({ grant, instanceUrl, nextDueReport }: Props) {
  const opportunityUrl = grant.sf_opportunity_id
    ? `${instanceUrl}/lightning/r/Opportunity/${grant.sf_opportunity_id}/view`
    : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <section>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Core</h3>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <dt className="text-muted-foreground">Funder</dt><dd>{grant.funder_name}</dd>
            <dt className="text-muted-foreground">Funder type</dt><dd>{grant.funder_type ?? "—"}</dd>
            <dt className="text-muted-foreground">Program</dt><dd>{grant.program_name ?? "—"}</dd>
            <dt className="text-muted-foreground">Restriction</dt><dd>{grant.restriction ?? "—"}</dd>
            <dt className="text-muted-foreground">Requested</dt><dd>{formatCurrency(grant.request_amount)}</dd>
            <dt className="text-muted-foreground">Awarded</dt><dd>{formatCurrency(grant.amount_awarded)}</dd>
            <dt className="text-muted-foreground">Received</dt><dd>{formatCurrency(grant.amount_received)}</dd>
            <dt className="text-muted-foreground">Submitted</dt><dd>{formatDate(grant.submission_date)}</dd>
            <dt className="text-muted-foreground">Award date</dt><dd>{formatDate(grant.award_date)}</dd>
            <dt className="text-muted-foreground">Grant closes</dt><dd>{formatDate(grant.grant_closes_date)}</dd>
            <dt className="text-muted-foreground">Recurring</dt><dd>{grant.is_recurring ? "Yes" : "No"}</dd>
            {grant.is_recurring && (
              <>
                <dt className="text-muted-foreground">Renewal due</dt>
                <dd>{formatDate(grant.renewal_due_date)}</dd>
              </>
            )}
          </dl>
        </section>

        {Object.keys(grant.custom_fields).length > 0 && (
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Custom fields</h3>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {Object.entries(grant.custom_fields).map(([k, v]) => (
                <FragmentEntry key={k} label={k} value={v == null ? "—" : String(v)} />
              ))}
            </dl>
          </section>
        )}

        {grant.notes && (
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Notes</h3>
            <p className="text-sm whitespace-pre-wrap">{grant.notes}</p>
          </section>
        )}
      </div>

      <aside className="space-y-4">
        {opportunityUrl && (
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Salesforce</div>
            <a href={opportunityUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
              Open Opportunity ↗
            </a>
          </div>
        )}
        {nextDueReport && (
          <div className="rounded-lg border border-amber-300 bg-amber-50 p-4">
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">Next action</div>
            <div className="text-sm">
              {nextDueReport.name} due <strong>{formatDate(nextDueReport.due_date)}</strong>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
