import React from 'react'

import './WordMatchQuiz.css'

const WordMatchQuiz = () => {
  const questions = [
    {
      id: '1',
      question: 'Und',
      answer: 'And'
    },
    {
      id: '2',
      question: 'Klein',
      answer: 'Small'
    },
    {
      id: '3',
      question: 'Zu',
      answer: 'To'
    },
    {
      id: '4',
      question: 'Meer',
      answer: 'Sea'
    },
    {
      id: '5',
      question: 'Langsam',
      answer: 'Slowly'
    }
  ]

  return (
    <div className="quiz-container">
      {questions.map((question) => (
        <div key={question.id} className="quiz-row">
          <button
            className="quiz-btn"
            type="button"
          >
            {question.question}
          </button>
          <button
            className="quiz-btn"
            type="button"
          >
            {question.answer}
          </button>
        </div>
      ))}
    </div>
  )
}

export default WordMatchQuiz
