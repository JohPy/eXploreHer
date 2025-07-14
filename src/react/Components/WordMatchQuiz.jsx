import React from 'react'

import './WordMatchQuiz.css'
import useWordMatchQuizStore from '../stores/useWordMatchQuizStore'

const WordMatchQuiz = () => {
  const questions = useWordMatchQuizStore((state) => state.questions) || []
  const selectQuestion = useWordMatchQuizStore((state) => state.selectQuestion)
  const selectedQuestion = useWordMatchQuizStore((state) => state.selectedQuestion)
  const selectAnswer = useWordMatchQuizStore((state) => state.selectAnswer)
  const selectedAnswer = useWordMatchQuizStore((state) => state.selectedAnswer)

  const handleQuestionClick = (question, id) => {
    selectQuestion(question, id)
  }

  const handleAnswerClick = (answer, id) => {
    selectAnswer(answer, id)
  }

  // helper to get button class names
  const getButtonClass = (type, question, answer) => {
    const base = 'quiz-btn'
    if (type === 'question') {
      if (selectedQuestion?.question === question.question && selectedQuestion?.id === question.id) return `${base} selected`
      return base
    }
    if (selectedAnswer?.answer === answer && selectedAnswer?.id === question.id) return `${base} selected`
    return base
  }

  return (
    <div className="quiz-container">
      {questions.map((question) => (
        <div key={question.id} className="quiz-row">
          <button
            type="button"
            onClick={() => handleQuestionClick(question.question, question.id)}
            className={getButtonClass('question', question, null)}
          >
            {question.question}
          </button>
          <button
            type="button"
            onClick={() => handleAnswerClick(
              question.answer,
              question.id
            )}
            className={getButtonClass('answer', question, question.answer)}
          >
            {question.answer}
          </button>
        </div>
      ))}
    </div>
  )
}

export default WordMatchQuiz
