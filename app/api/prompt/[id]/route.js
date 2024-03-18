import { ConnectToDB, connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET 

export const GET = async (request,{params})=>{
    // const {userId, prompt, tag} = await req.json();

try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if(!prompt) return new Response("prompt not found", { status: 404 });
     return new Response(JSON.stringify(prompt), { status: 200 })
} catch (error) {
    return new Response("Failed to fetch all prompt", { status: 500 });

}
}

// Update
export const PATCH = async (request,{params})=>{
 const {prompt, tag} = await request.json();

 try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id)
    if(!existingPrompt) return new Response("prompt not found", { status: 404 });
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

     return new Response(JSON.stringify(existingPrompt), { status: 200 })
} catch (error) {
    return new Response("Failed to update prompt", { status: 500 });

}
}

//DELETE

export const DELETE = async (request,{params})=>{
    // const {userId, prompt, tag} = await req.json();

try {
    await connectToDB();
     await Prompt.findByIdAndDelete(params.id);
     return new Response("Prompt deleted successfully", { status: 200 })
} catch (error) {
    return new Response("Failed to Delete prompt", { status: 500 });

}
}
