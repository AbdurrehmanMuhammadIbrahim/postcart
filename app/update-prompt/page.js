"use client";

import { useState,useEffect,Suspense } from 'react'
import { useRouter,useSearchParams } from 'next/navigation'

import Form from "@components/Form";

const EditPrompt = () => {
 const router = useRouter();

 const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [post, setPost] = useState({ prompt: "", tag: "", });
  const [submitting,setSubmitting] = useState(false);
;

useEffect(()=>{
const getPromptDetails = async () => {
    const response = await fetch(`/api/prompt/${promptId}`);

    const data = await response.json();
// console.log("promptdata",data)

    setPost ({
        prompt: data.prompt,
        tag: data.tag,
    })
}
if(promptId)getPromptDetails();
},[promptId]);



const UpdatePrompt = async (e)=>{
e.preventDefault();
setSubmitting(true);

if (!promptId) return alert("Missing PromptId!");

try {
   const response =await fetch (`/api/prompt/${promptId}`,
   {
    method:"PATCH",
    body:JSON.stringify({
      prompt: post.prompt,
      tag: post.tag
    })
   })

   if(response.ok){
    router.push("/");
   }
} catch (error) {
  console.log ("Update prompt error",error);
}finally{
  setSubmitting(false);
}

}


  return (
    <Suspense fallback={<div>Loading...</div>}>

    <div>
      <Form
      type="Edit"
      post = {post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit= {UpdatePrompt}
      />
    </div>
    </Suspense>
  )
}

export default EditPrompt
