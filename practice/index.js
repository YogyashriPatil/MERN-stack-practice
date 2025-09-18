import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './utils/db.js';
import userRoutes from './routes/user.routes.js'
dotenv.config();

const app = express()

app.use(cors(
  {
    origin : 'http://localhost:3000',
    credentials:true,
    methods:['get','post','delete','options'],
    allowedHeaders:['Content-Type','Authorization']
  }
));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT;

// app.get('/', )

//connect to db
db();

//user routes
app.use("/api/v1/users",userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
