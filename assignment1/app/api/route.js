import { NextResponse, NextRequest } from "next/server";

export async function POST(req, res) {

  const body = await req.json()
  return new NextResponse(JSON.stringify({ message: `Hello ${body.name} from server side` }))
}
