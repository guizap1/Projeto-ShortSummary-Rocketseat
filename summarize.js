import { pipeline } from "@xenova/transformers"

import { summaryExample } from "./utils/summary.js"

export async function summarize(text) {
  try {
    // return summaryExample

    console.log("Realizando o resumo...")

    const generator = await pipeline("summarization", "Xenova/whisper-base")

    const output = await generator(text)

    console.log("Resumo concluído com sucesso!")
    return output[0].transcription_text
  } catch (error) {
    console.log("Não foi possível realizar o resumo", error)
    throw new Error(error)
  }
}
