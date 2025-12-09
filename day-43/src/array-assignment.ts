interface User {
    firstName: string,
    lastName: string,
    age:number
}

function filterUsers(users: User[]){
    let ans = []
    for(let i =0;i< users.length;i++){
        if(users[i].age > 18){
            ans.push(users[i])
        }
    }
    return ans
}

const filteredUsers = filterUsers([{
    firstName:"hitesh",
    lastName:"patil",
    age:15
}])
console.log(filteredUsers)