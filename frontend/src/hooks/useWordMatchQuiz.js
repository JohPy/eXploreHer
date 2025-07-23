import { useState } from 'react'

function useWordMatchQuiz(questions) {
  const [selectedQuestion, setSelectedQuestion] = useState({ question: null, id: null })
  const [selectedAnswer, setSelectedAnswer] = useState({ answer: null, id: null })
  const [disabledButtons, setDisabledButtons] = useState([])

  const selectAnswer = (answer, id) => {
    setSelectedAnswer((prev) => (prev.answer === answer && prev.id === id
      ? { answer: null, id: null }
      : { answer, id }))
  }

  const selectQuestion = (question, id) => {
    setSelectedQuestion((prev) => (prev.question === question && prev.id === id
      ? { question: null, id: null }
      : { question, id }))
  }

  const checkAnswer = (question, answer) => {
    const questionObj = questions.find((q) => q.question === question)
    if (!questionObj) return false
    if (questionObj.answer === answer) {
      setSelectedQuestion({ question: null, id: null })
      setSelectedAnswer({ answer: null, id: null })
      return true
    }
    return false
  }

  const disableButton = (questionId, answerId) => {
    setDisabledButtons((prev) => [...prev, { questionId, answerId }])
  }

  return {
    selectedQuestion,
    selectedAnswer,
    disabledButtons,
    selectAnswer,
    selectQuestion,
    checkAnswer,
    disableButton
  }
}

export default useWordMatchQuiz
