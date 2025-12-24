import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: "Login with email",
            credentials:{
                username: {label: "Username", type:"text", placeholder:'abc@gmail.com'},
                password: {label:"Password", type:"password"}
            },
            async authorize(credentials, req){
                const username = credentials?.username;
                const password = credentials?.password;
                // db req  to check if this username and password
                console.log(username)
                console.log(password)
                const user = {
                    name:"abc",
                    id:1,
                    username:"abc@gmail.com"
                }
                if(user){
                    return user
                }
                else {
                    return null
                }
            }
        })
    ]
})
export { handler as GET, handler as POST}