type Employee = {
    name:  string,
    startDate: string,
}

type Manager = {
    name: string,
    department: string
}

type TeamLead = Employee & Manager

let e: Employee= {
    name: "yogyashri",
    startDate : "1-08-2005"
}

let m: Manager= {
    name: "yogyashri",
    department : "computer"
}

let t: TeamLead = {
    name:"khushi",
    startDate:"16-04-3455",
    department:"py"
}