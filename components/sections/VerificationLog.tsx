import Link from "next/link";
import { ArrowUpRight, CircleDot } from "lucide-react";

type Entry = {
  time: string;
  pilot: string;
  surface: string;
  event: string;
  status: "planned" | "in design" | "pending agreement";
};

const entries: Entry[] = [
  {
    time: "2026-05-22",
    pilot: "Pilot #001",
    surface: "Methodology",
    event: "Draft Logic Score methodology prepared for adviser and operator review",
    status: "in design"
  },
  {
    time: "2026-05-18",
    pilot: "Pilot #001",
    surface: "NLIS",
    event: "Proposed livestock evidence schema documented; data access not yet connected",
    status: "planned"
  },
  {
    time: "2026-05-14",
    pilot: "Pilot #001",
    surface: "Weight",
    event: "Sample output structure specified; production dataset not yet ingested",
    status: "planned"
  },
  {
    time: "2026-05-09",
    pilot: "Pilot #001",
    surface: "Carbon",
    event: "Boundary file under co-design with operator",
    status: "planned"
  },
  {
    time: "2026-05-02",
    pilot: "Pilot #001",
    surface: "Sale",
    event: "Founding commercial pilot scope prepared for execution",
    status: "pending agreement"
  }
];

const statusStyle: Record<Entry["status"], string> = {
  planned: "text-[color:var(--muted)] border-[color:var(--border)] bg-transparent",
  "in design": "text-[#c9a96e] border-[#c9a96e]/40 bg-[#c9a96e]/10",
  "pending agreement": "text-[color:var(--accent)] border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10"
};

export function VerificationLog() {
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--panel)]/30">
      <div className="container-x py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-widest text-[color:var(--accent)]">
              Pilot build log · Current status
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              Show the work. Label the status.
            </h2>
            <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
              Pilot #001 remains in controlled design and commercial activation. These entries are a
              transparent delivery register—not proof of completed registry integrations or production audits.
            </p>
          </div>
          <Link
            href="/proof"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent)] hover:gap-2.5 transition-all"
          >
            View full proof page <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mt-10 card overflow-hidden">
          <div className="grid grid-cols-12 px-5 py-3 border-b border-[color:var(--border)] text-[10px] uppercase tracking-wider text-[color:var(--muted)]">
            <div className="col-span-3 sm:col-span-2">Date</div>
            <div className="col-span-3 sm:col-span-2">Pilot</div>
            <div className="col-span-6 sm:col-span-2">Surface</div>
            <div className="hidden sm:block sm:col-span-4">Event</div>
            <div className="hidden sm:block sm:col-span-2 text-right">Status</div>
          </div>
          {entries.map((e, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 px-5 py-4 border-b border-[color:var(--border)] last:border-0 text-sm items-center hover:bg-[color:var(--accent)]/[0.03] transition-colors"
            >
              <div className="col-span-3 sm:col-span-2 font-mono text-[12px] text-[color:var(--muted)]">
                {e.time}
              </div>
              <div className="col-span-3 sm:col-span-2 text-[color:var(--ink)] font-medium">
                {e.pilot}
              </div>
              <div className="col-span-6 sm:col-span-2 text-[color:var(--ink)]/80">
                {e.surface}
              </div>
              <div className="col-span-12 sm:col-span-4 text-[color:var(--muted)] mt-2 sm:mt-0">
                {e.event}
              </div>
              <div className="col-span-12 sm:col-span-2 mt-2 sm:mt-0 sm:text-right">
                <span
                  className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border ${statusStyle[e.status]}`}
                >
                  <CircleDot size={10} />
                  {e.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
