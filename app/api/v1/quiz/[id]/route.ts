import { getData, saveData } from "@/app/controllers";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const userId = params?.id;
    const data = req.json();
    console.log(data);
    // await saveData()
    // const await 

    return NextResponse.json({
        message: "Post request recevied"
    });
}

export async function GET({params}: {params: {id: string}}) {
    const userId = params?.id;
    const quizdata = await getData(userId);
    // console.log(quizdata);
    return NextResponse.json({
        quizdata
    })
}
