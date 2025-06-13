
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
const apiKey = process.env.API_KEY!;
const systemPrompt = process.env.SYSTEM_PROMT;

export async function POST(req: NextRequest){


    // how get the body req.body?
    const data = await req.json();
    const topic = data.topic;
   
    console.log(systemPrompt)

    try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: systemPrompt as string
            }
          ]
        }
      ]
    });

    // Now send topic as user input
    const result = await chat.sendMessage(topic);
    let response = result.response.text();
    response = response.trim();

    if(response.startsWith("```json") && response.endsWith("```")) {
      response = response.substring("```json".length, response.length - "```".length).trim();
    }
    // console.log(response);
    return NextResponse.json({
        data: JSON.parse(response)}, {status: 200})
    
  } catch (error) {
    console.error("Something went wrong:", error);
    return NextResponse.json(
        {message: "Somthing is wrong"},{status: 500})
  }

}

    // send data to database
    // console.log(data)    



    // return NextResponse.json({
    //     message: "You have been signed up"
    // })
