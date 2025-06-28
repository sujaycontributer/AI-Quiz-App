import { getData, saveData } from "@/app/controllers";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
    const userId = context.params?.id;
    const data = await req.json();
    // console.log(data)
    const accuracy = data.accuracy;
    const questionsSolved = data.questionsSolved; 

    console.log(`in route value: ${questionsSolved}`);
    const response = await saveData(userId, questionsSolved, accuracy);
    

    return NextResponse.json({
        response,
        message: "Updated succesfully!"
    });
}

export async function GET(req:NextRequest, context: { params: { id: string } }) {
    const userId = context.params?.id;
    // console.log(`userId in GET request ${userId}`)
    const quizdata = await getData(userId);
    // console.log(quizdata);
    return NextResponse.json({
        quizdata
    })
}
