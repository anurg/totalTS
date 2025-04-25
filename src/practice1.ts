import { generateText} from "ai"
import { openai } from "@ai-sdk/openai"
import dotenv from "dotenv"
const model = openai("gpt-4o")

dotenv.config()

export const answerMyQuestion = async (prompt:string)=> {
    const {text} = await generateText({
        model:model,
        prompt:prompt
    })
    return text
}

const answer = await answerMyQuestion("what is the chemical formula for dihydrogen monoxide?")
console.log(answer)
