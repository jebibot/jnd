import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  if (tag) {
    revalidateTag(tag);
  }
  return Response.json({ revalidated: true, now: Date.now() });
}
