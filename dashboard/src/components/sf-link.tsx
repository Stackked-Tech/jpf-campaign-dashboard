import { ExternalLink } from "lucide-react";

interface SfLinkProps {
  instanceUrl: string;
  recordId: string;
  children: React.ReactNode;
  className?: string;
}

export function SfLink({ instanceUrl, recordId, children, className }: SfLinkProps) {
  return (
    <a
      href={`${instanceUrl}/${recordId}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? "text-primary hover:text-primary/80 hover:underline inline-flex items-center gap-1 font-medium"}
    >
      {children}
      <ExternalLink className="h-3 w-3 opacity-40" />
    </a>
  );
}
