import { PrismaClient } from "./generated/prisma/client.js";

const client = new PrismaClient();

async function createUser() {
    await client.user.create({
        data:{
            username: "yogi",
            password:"123",
            age: 21,
            city: "delhi",
            todos:{
                create:{
                    description:"adsf",
                    title:"Asd",
                    done : false
                }
            }
        }
    })    
}
createUser()