import axios from "axios";
import { useEffect, useState } from "react";

export default async function Profile(){
    const [profilePicture, setprofilePicture] = useState("")
    useEffect(() => {
        const res = axios.get("http://localhost:3000/api/profile",{
            headers:{
                authorization: localStorage.getItem("token")
            }
        })
        setprofilePicture(res.data.avatarUrl)
    })

    return <div>
        {profilePicture}
    </div>
}