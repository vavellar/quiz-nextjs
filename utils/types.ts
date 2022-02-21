export interface Question {
  text: string
  correct: boolean,
  id: number
}

export interface Questions {
  id: number
  title: string
  answers: Array<Question>
}