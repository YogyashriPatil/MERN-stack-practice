interface address{
    city: string,
    country: string,
    pincode: number,
    houseNummber: string
}

interface user{
    name: string,
    age: number,
    address: address
}

interface office{
    address: address
}
        