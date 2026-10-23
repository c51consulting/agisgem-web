import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

const ALLOWED_TYPES = ["pilot", "investor", "partner", "community", "validation", "integration"] as const;
type LeadType = (typeof ALLOWED_TYPES)[number];

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function field(value: unknown, limit = 1000) {
  return String(value || "").trim().slice(0, limit);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const type = field(body.type, 40) as LeadType;
  const name = field(body.name, 200);
  const email = field(body.email, 320);
  const organisation = field(body.organisation, 200);
  const message = field(body.message, 4000);
  const sector = field(body.sector, 200);
  const useCase = field(body.useCase, 1000);
  const purpose = field(body.purpose, 500);
  const timeframe = field(body.timeframe, 200);
  const consent = body.consent === true;

  if (!ALLOWED_TYPES.includes(type)) return NextResponse.json({ error: "Invalid enquiry type" }, { status: 400 });
  if (!name || !email || !isEmail(email)) return NextResponse.json({ error: "Name and a valid email are required" }, { status: 400 });
  if (!consent) return NextResponse.json({ error: "Please agree to be contacted about this enquiry" }, { status: 400 });

  const enquiryDetails = [
    `Sector: ${sector || "Not provided"}`,
    `Technology, asset or claim: ${useCase || "Not provided"}`,
    `Purpose: ${purpose || "Not provided"}`,
    `Preferred timeframe: ${timeframe || "Not provided"}`,
    "Consent to be contacted: Yes",
    message ? `Additional context: ${message}` : ""
  ].filter(Boolean).join("\n").slice(0, 4000);

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    console.warn("[lead] supabase not configured; lead not persisted", { type, email });
    return NextResponse.json({ ok: true, persisted: false });
  }

  const { error } = await supabase.from("leads").insert({
    type,
    name,
    email,
    organisation: organisation || null,
    message: enquiryDetails
  });

  if (error) {
    console.error("[lead] insert error", error);
    return NextResponse.json({ error: "Could not save submission" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, persisted: true });
}
