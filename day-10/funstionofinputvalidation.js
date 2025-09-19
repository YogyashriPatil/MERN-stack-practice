// if this is an array of strings return true else return false

// function validateInput(arr) {
//     if( typeof arr=="object" && arr.length >=1 && arr[0]=="number"){

//     }
// }

// if using zod
const zod=require("zod")
function validateInput(arr) {
    const schema=zod.array(z.number());

    const response=schema.safeParse(arr);
    console.log(response);
}

validateInput([1,2,3])



//validation
// {
//     email:string => should look like email
//     password => should have 8 letters
// }
const schema=zod.object({
    email :zpd.string().email(),
    password:zod.string().min(8)
})