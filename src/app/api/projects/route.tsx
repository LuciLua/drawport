import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "../connectToDatabase";

export async function GET(req: NextRequest, res) {

    const db = await connectToDatabase()
    return NextResponse.json({ projetos: db })
}
