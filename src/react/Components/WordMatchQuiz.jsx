import React, { useMemo, useEffect, useState } from 'react'

import './WordMatchQuiz.css'
import shuffle from '../utils/shuffle'
import useWordMatchQuizStore from '../stores/useWordMatchQuizStore'

const WordMatchQuiz = () => {
  const questions = useWordMatchQuizStore((state) => state.questions) || []
  const selectQuestion = useWordMatchQuizStore((state) => state.selectQuestion)
  const selectedQuestion = useWordMatchQuizStore((state) => state.selectedQuestion)
  const selectAnswer = useWordMatchQuizStore((state) => state.selectAnswer)
  const selectedAnswer = useWordMatchQuizStore((state) => state.selectedAnswer)

  const shuffledQuestions = useMemo(() => shuffle(questions), [questions])
  const shuffledAnswers = useMemo(() => shuffle(questions.map((q) => q.answer)), [questions])

  const disabledButtons = useWordMatchQuizStore((state) => state.disabledButtons) || []
  const [tempFeedback, setTempFeedback] = useState(null)

  const handleQuestionClick = (question, id) => {
    if (tempFeedback) return
    selectQuestion(question, id)
  }

  const handleAnswerClick = (answer, id) => {
    if (tempFeedback) return
    selectAnswer(answer, id)
  }

  useEffect(() => {
    if (
      selectedQuestion?.question &&
      selectedAnswer?.answer &&
      selectedQuestion.id &&
      selectedAnswer.id
    ) {
      const isCorrect = useWordMatchQuizStore
        .getState()
        .checkAnswer(selectedQuestion.question, selectedAnswer.answer)

      const questionId = selectedQuestion.id
      const answerId = selectedAnswer.id

      if (isCorrect) {
        setTempFeedback({
          questionId,
          answerId,
          isCorrect: 'correct'
        })

        setTimeout(() => {
          setTempFeedback(null)
          useWordMatchQuizStore.getState().disableButton(questionId, answerId)
          selectQuestion(null, null)
          selectAnswer(null, null)
        }, 1000)
      } else {
        setTempFeedback({
          questionId,
          answerId,
          isCorrect: 'incorrect'
        })

        setTimeout(() => {
          setTempFeedback(null)
          selectQuestion(null, null)
          selectAnswer(null, null)
        }, 1000)
      }
    }
  }, [selectedQuestion, selectedAnswer])

  const isSelectedAnswer = (questionId, answer) => (
    selectedAnswer?.id === questionId &&
    selectedAnswer?.answer === answer
  )

  const isSelectedQuestion = (questionId, question) => (
    selectedQuestion?.id === questionId &&
    selectedQuestion?.question === question
  )

  // helper to get button class names
  const getButtonClass = (type, question, answer, index) => {
    const base = 'quiz-btn'
    const feedback = tempFeedback
    if (type === 'question') {
      if (feedback?.isCorrect === 'correct' && feedback.questionId === question.id) return `${base} correct`
      if (feedback?.isCorrect === 'incorrect' && feedback.questionId === question.id) return `${base} incorrect`
      if (!feedback && isSelectedQuestion(question.id, question.question)) return `${base} selected`
      return base
    }
    if (feedback?.isCorrect === 'correct' && feedback.answerId === question.id) return `${base} correct`
    if (feedback?.isCorrect === 'incorrect' && feedback.answerId === question.id) return `${base} incorrect`
    if (!feedback && isSelectedAnswer(question.id, shuffledAnswers[index])) return `${base} selected`
    return base
  }

  return (
    <div className="quiz-container">
      {shuffledQuestions.map((question, index) => (
        <div key={question.id} className="quiz-row">
          <button
            type="button"
            disabled={disabledButtons.some(
              (btn) => btn.questionId === question.id
            )}
            onClick={() => handleQuestionClick(question.question, question.id)}
            className={getButtonClass('question', question, null, index)}
          >
            {question.question}
          </button>
          <button
            type="button"
            onClick={() => handleAnswerClick(
              shuffledAnswers[index],
              question.id
            )}
            disabled={disabledButtons.some(
              (btn) => btn.answerId === question.id
            )}
            className={getButtonClass('answer', question, shuffledAnswers[index], index)}
          >
            {shuffledAnswers[index] || 'No answer available'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default WordMatchQuiz
