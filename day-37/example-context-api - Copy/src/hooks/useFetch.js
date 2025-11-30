import { useState, useEffect } from 'react'

export function usePostTitle(){
    const [post, setPost] = useState({})
    
    async function getPosts() {
        const response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response)
        const json = await response.json();
        setPost(json);
    }
    
    useEffect(() => {
        getPosts();
    },[url])
    return post.title;
}


export function useFetch(url){
    const [finalData, setfinalData] = useState({})
    
    async function getPosts() {
        const response= await fetch(url);
        console.log(response)
        const json = await response.json();
        setfinalData(json);
    }
    
    useEffect(() => {
        getPosts();
    },[])
    return {
        finalData
    };
}