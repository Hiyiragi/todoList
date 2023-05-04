import { useEffect, useState } from "react"

export default function Post({postId}){
    const [postData, setPostData] = useState();

    useEffect(()=>{
        const getData = async ()=>{
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            const jsonData = await data.json();
            setPostData(jsonData);
        }
        getData();
        
    }, [postId])
    
    return (
        <div>
            <h2>{postData?.title}</h2>
            <p>{postData?.body}</p>
        </div>
    )
}