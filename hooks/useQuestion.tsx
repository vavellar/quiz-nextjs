import { useState } from "react"
import { Question, Questions } from "../utils/types"

export const useQuestion = () => {
  const [questions, setQuestions ] = useState<Array<Questions>>([])
  const [ question, setQuestion ] = useState<Questions>()

  async function getQuestions() {
    const fetchConfig = { method: 'GET'}
    const response = await fetch('/api/questions', fetchConfig)
    const resQuestions = await response.json()
    setQuestions(resQuestions)
  }

  async function getQuestionById(id: string) {
    const fetchConfig = { method: 'GET'}
    const response = await fetch(`/api/questions/${id}`, fetchConfig)
    const resQuestion = await response.json()
    setQuestion(resQuestion)
  }

  async function sendAnswer(id: number, answer: number) {
    await fetch(`/api/questions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userAnswer: answer})
    });
  }

  return {
    questions, getQuestions, question, getQuestionById, sendAnswer
  }
}