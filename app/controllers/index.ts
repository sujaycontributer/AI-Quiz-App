
import prisma from "../lib/prisma"; 

export async function createUser(name:string, email: string, password: string) {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            }

        });

        return user;
}

export async function saveData(userId: string, questionsSolved: number, accuracy: number) {

    const quiz = await prisma.quizData.findUnique({
        where:{
            userId
        }
    });

   let totalAccuracy:number = 0;
   let totalquiz:number = 0;
   let qnslv:number = 0;
   
   if(quiz?.questionsSolved) {
    qnslv = quiz.questionsSolved + questionsSolved;
   }else{
    qnslv = questionsSolved;
   }

   if(quiz?.totalAccuracy) {
     totalAccuracy = quiz?.totalAccuracy + accuracy;
   }else{
    totalAccuracy = accuracy;
   }

   if(quiz?.totalquiz){
     totalquiz = quiz.totalquiz + 1;
   }else{
    totalquiz = 1;
   }
   const acr = Math.floor((totalAccuracy / totalquiz)*100 )
   const data = await prisma.quizData.update({
        where :{
            userId
        },
        data : {
            totalquiz,
            questionsSolved:qnslv,
            totalAccuracy,
            accuracy:acr
        }
    });
    
    return data;
}

export async function getData(userId: string) {
    console.log(`user id is ${userId}`);

    const quizdata = await prisma.quizData.findFirst({
        where : {
            userId: userId
        }
    });
    return quizdata;
}