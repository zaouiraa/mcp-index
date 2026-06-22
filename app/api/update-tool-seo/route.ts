import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { slug, short_description, answer_first_summary, setup_steps, faq } = body

    if (!slug) {
      return NextResponse.json({ error: "slug is required" }, { status: 400 })
    }

    const { error } = await supabase
      .from("tools")
      .update({
        short_description,
        answer_first_summary,
        setup_steps,
        faq,
      })
      .eq("slug", slug)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 })
  }
}
