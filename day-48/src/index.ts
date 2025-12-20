import { PrismaClient } from "./generated/prisma/client.js";

const client = new PrismaClient();

async function createUser() {
    await client.user.create({
        data:{
            username: "yogi",
            password:"123",
            age: 21,
            city: "delhi"
        }
    })    
}



async function findUser() {
    const user = await client.user.findFirst({
        where:{
            id: 1
        },
        select:{
            username:true
        }
    })    
    console.log(user?.password)
}
