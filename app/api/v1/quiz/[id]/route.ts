import { getData, saveData } from "@/app/controllers";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const userId = (await params)?.id;
    const data = await req.json();
    // console.log(data)
    const accuracy = data.accuracy;
    const questionsSolved = data.questionsSolved; 
    // totalquiz,
    //         questionsSolved,
    //         totalAccuracy,
    //         accuracy
    console.log(accuracy, questionsSolved);
    const response = await saveData(userId, accuracy, questionsSolved);
    

    return NextResponse.json({
        response,
        message: "Updated succesfully!"
    });
}

export async function GET({params}: {params: {id: string}}) {
    const userId = params?.id;
    console.log(`userId in GET request ${userId}`)
    const quizdata = await getData(userId);
    // console.log(quizdata);
    return NextResponse.json({
        quizdata
    })
}
