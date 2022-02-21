import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import AnswerCard from '../components/AnswerCard'
import { useQuestion } from '../hooks/useQuestion'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { question, getQuestionById, sendAnswer } = useQuestion()
  const [timer, setTimer] = useState(0)

  // setTimeout(() =>{
  //   setTimer(timer + 1)
  //   if(timer === 10) {
  //     updateQuestion()
  //   }
  // }, 1000)

  function updateQuestion() {
    getQuestionById(randomNumber())
    setTimer(0)
  }

  function randomNumber() { 
    const random = Math.random() * (5 - 1) + 1;
    return random.toFixed(0)
} 

  useEffect(() => {
    getQuestionById(randomNumber())
  }, [])
  
  // console.log(questions)
  return (
   <div className={styles.main}>
     <h1>{timer}</h1>
     <h1>{question?.title}</h1>
     <div className={styles.answers_wrapper}>
       {question?.answers.map((answer, index) => {
         return (
          <div style={{ paddingTop: '10px'}} onClick={() => sendAnswer(question.id, index + 1)}>
            <AnswerCard text={answer.text} index={index}/>
          </div>
         )
       })}
       <button onClick={() =>getQuestionById(randomNumber())}>Próxima</button>
     </div>
   </div>
  )
}

export default Home
