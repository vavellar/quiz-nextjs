import type { NextApiRequest, NextApiResponse } from 'next'
import { questions } from '../../../utils/questions'

function getQuestionUnanswered(questionID: string | string[]) {
  const questionById = questions.find((question) => question.id  === Number(questionID))

  if (questionById?.alreadyAnswered) {
    const questionByIdNew = questions.find((question) => question.id + 1 === Number(questionID))
    return questionByIdNew
  }

  return questionById
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const { questionID } = req.query
  const { userAnswer } = req.body
  const question = getQuestionUnanswered(questionID)

  if ( req.method === 'GET') {
    return res.status(200).json(question)
  }

  if (req.method === "PUT" && question) {
    const isCorrectAnswer = question.answers.find((answer) => answer.id === Number(userAnswer))
    console.log(isCorrectAnswer)

    if (isCorrectAnswer?.correct) {
      question.answerCorrect = true
    }
    question.alreadyAnswered = true
    return res.status(200).json(question)
  }

}
