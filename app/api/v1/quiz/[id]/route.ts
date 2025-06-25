import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    

    return NextResponse.json({
        message: "Post request recevied"
    });
}

export async function GET(req:NextRequest, {params}: {params: {id: string}}) {
    const userId = params.id;
    return NextResponse.json({
        userId
    })
}
