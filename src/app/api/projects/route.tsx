import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "../connectToDatabase";

export async function GET(req: NextRequest, res) {

    try{
        const db = await connectToDatabase()
        return NextResponse.json({ projetos: db })
    } catch(err) {
        console.error(err)
    } finally {
        console.log("end")
    }
}
