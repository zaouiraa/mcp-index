import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const requiredEnv = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
] as const;

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

const allowedCategories = new Set([
  "Version Control",
  "Browser Automation",
  "Database",
  "Productivity",
  "Security",
  "Cloud & Infrastructure",
  "Monitoring",
  "AI Tools",
  "Developer Tools",
  "Other",
]);

const allowedTypes = new Set(["Free", "Freemium", "Paid"]);

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const toolName = clean(body.toolName);
    const websiteUrl = clean(body.websiteUrl);
    const category = clean(body.category);
    const pricingType = clean(body.pricingType);
    const owner = clean(body.owner);
    const shortDescription = clean(body.shortDescription);
    const notes = clean(body.notes);

    const errors: Record<string, string> = {};

    if (!toolName) errors.toolName = "Tool name is required.";
    if (!websiteUrl) errors.websiteUrl = "GitHub URL or website is required.";
    if (websiteUrl && !isValidUrl(websiteUrl)) {
      errors.websiteUrl = "Enter a valid http or https URL.";
    }

    if (!category) errors.category = "Category is required.";
    if (category && !allowedCategories.has(category)) {
      errors.category = "Invalid category.";
    }

    if (!pricingType) errors.pricingType = "Type is required.";
    if (pricingType && !allowedTypes.has(pricingType)) {
      errors.pricingType = "Invalid pricing type.";
    }

    if (!owner) errors.owner = "Tool owner is required.";
    if (!shortDescription) {
      errors.shortDescription = "Short description is required.";
    } else if (shortDescription.length > 300) {
      errors.shortDescription =
        "Short description must be 300 characters or less.";
    }

    if (notes.length > 2000) {
      errors.notes = "Notes must be 2000 characters or less.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { ok: false, errors },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("tool_submissions")
      .insert({
        tool_name: toolName,
        website_url: websiteUrl,
        category,
        pricing_type: pricingType,
        owner,
        short_description: shortDescription,
        notes: notes || null,
        status: "pending",
      })
      .select("id")
      .single();

    if (error) {
      return NextResponse.json(
        {
          ok: false,
          error: "Failed to save submission.",
          details: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Submission received successfully.",
        submissionId: data.id,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid request payload.",
      },
      { status: 400 }
    );
  }
}
