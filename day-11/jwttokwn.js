const jwt=require("jsonwebtoken");

// decode, verify, generate
const value ={
    name:"yogyashri",
    accountNumber:123123
}

//jwt
const token=jwt.sign(value,"secret");
console.log(token);

// this token has been generated using this secret, and hence this token can onnly be verified using this secret 
// this is your chequebook

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieW9neWFzaHJpIiwiYWNjb3VudE51bWJlciI6MTIzMTIzLCJpYXQiOjE3NTgzNzYyOTh9.AqxQ1AzF1-meDvGvdHCRucWdRyxE3HhdnTD7InSUxMc
const verifytoken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieW9neWFzaHJpIiwiYWNjb3VudE51bWJlciI6MTIzMTIzLCJpYXQiOjE3NTgzNzYyOTh9.AqxQ1AzF1-meDvGvdHCRucWdRyxE3HhdnTD7InSUxMc","secret")
console.log(verifytoken);