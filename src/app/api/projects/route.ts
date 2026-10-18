import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Project from "@/models/Project";

export const runtime = "nodejs";

export async function GET() {
  try {
    await connectToDatabase();
    const projects = await Project.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: projects });
  } catch {
    return NextResponse.json(
      { success: false, error: "Database is not configured or unavailable." },
      { status: 503 },
    );
  }
}

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      error:
        "Project creation is disabled until admin authentication is configured.",
    },
    { status: 403 },
  );
}
