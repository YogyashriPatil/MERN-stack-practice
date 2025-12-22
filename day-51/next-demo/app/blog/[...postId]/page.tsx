export default async function BlogPAge({params}:any) {
    const postId = (await params).blogId;

    return <div>
        Blog page { JSON.stringify(postId)}
    </div>
    
}