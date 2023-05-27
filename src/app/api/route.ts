import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return new NextResponse("Biliweb Instagram API V1.0.0");
}
