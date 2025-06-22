
import prisma from "../lib/prisma"; 

export async function createUser(id: string, username: string, password: string) {
        const user = await prisma.user.create({
            data: {
                id,
                username,
                password
            }

        });

        return user;
}

export async function saveData(userId: string, totalquiz: number, questionsSolved: number, totalAccuracy: number, accuracy: number) {
    const data = await prisma.quizData.update({
        where :{
            userId
        },
        data : {
            totalquiz,
            questionsSolved,
            totalAccuracy,
            accuracy
        }
    });
    
    return data;
}

export async function getData(userId: string) {

    const quizdata = await prisma.quizData.findUnique({
        where : {
            
        }
    });

    return quizdata;
}