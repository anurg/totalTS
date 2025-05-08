<<<<<<< HEAD
<<<<<<< HEAD
import { generateText } from "ai";
import dotenv from "dotenv"
import { openai } from "@ai-sdk/openai";

dotenv.config()
// console.log(process.env.TAVILY_API_KEY)
const model = openai("gpt-4o")

const generateAnswer = async (prompt : string) => {
    const {text} = await generateText({
        model:model,
        prompt:prompt
    })
    return text
}
const result = await generateAnswer("Explain React in 10 sentences.")
console.log(result)



=======


  const scores: Record<string,number> = {};
  
  scores.math = 95;
  scores.english = 90;
  scores.science = 85;
>>>>>>> df46133 (TS Practice)
=======
>>>>>>> 0d83e9a (....)
