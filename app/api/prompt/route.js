import { ConnectToDB, connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request)=>{
    // const {userId, prompt, tag} = await req.json();

try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 })
} catch (error) {
    return new Response("Failed to fetch all prompt", { status: 500 });

}
}