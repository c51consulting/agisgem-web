import { BadgeCheck, Clock3, ShieldAlert } from "lucide-react";

type BadgeStatus = "pilot" | "verified" | "expired" | "revoked";

const statusConfig = {
  pilot: { label: "Pilot sample", Icon: Clock3, tone: "text-[#c9a96e] border-[#c9a96e]/45 bg-[#c9a96e]/10" },
  verified: { label: "Verified", Icon: BadgeCheck, tone: "text-[color:var(--accent)] border-[color:var(--accent)]/45 bg-[color:var(--accent)]/10" },
  expired: { label: "Expired", Icon: ShieldAlert, tone: "text-[color:var(--muted)] border-[color:var(--border)] bg-transparent" },
  revoked: { label: "Revoked", Icon: ShieldAlert, tone: "text-red-300 border-red-400/40 bg-red-400/10" }
} as const;

export function VerificationBadge({ status, reportId, methodology = "G.A.M.E. v0.1" }: { status: BadgeStatus; reportId: string; methodology?: string }) {
  const { label, Icon, tone } = statusConfig[status];
  return (
    <div className={`inline-flex items-center gap-3 rounded-xl border px-4 py-3 ${tone}`} aria-label={`Verified by AGIsGEM: ${label}`}>
      <Icon size={25} aria-hidden="true" />
      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] opacity-80">Verified by AGIsGEM</div>
        <div className="font-semibold leading-tight">{label}</div>
        <div className="mt-1 font-mono text-[10px] opacity-75">{reportId} · {methodology}</div>
      </div>
    </div>
  );
}
