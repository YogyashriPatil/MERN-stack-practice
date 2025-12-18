import { configDotenv } from "dotenv";
import { Client } from "pg";
configDotenv();
const pgClient = new Client(process.env.postgres_db)

// const pgClient2 = new Client({
//     user:"",
//     password:"",
//     port:5432,
//     host:"",
//     database:""
// })
async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users");
    console.log(response);
}
main()