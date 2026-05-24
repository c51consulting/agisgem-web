import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

const ALLOWED_TYPES = ["pilot", "investor", "partner", "community"] as const;
type LeadType = (typeof ALLOWED_TYPES)[number];

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const type = String(body.type || "").trim() as LeadType;
  const name = String(body.name || "").trim().slice(0, 200);
  const email = String(body.email || "").trim().slice(0, 320);
  const organisation = String(body.organisation || "").trim().slice(0, 200);
  const message = String(body.message || "").trim().slice(0, 4000);

  if (!ALLOWED_TYPES.includes(type)) {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }
  if (!name || !email || !isEmail(email)) {
    return NextResponse.json({ error: "Name and a valid email are required" }, { status: 400 });
  }

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
    message: message || null
  });

  if (error) {
    console.error("[lead] insert error", error);
    return NextResponse.json({ error: "Could not save submission" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, persisted: true });
}
