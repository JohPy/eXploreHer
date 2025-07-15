import React, { useMemo, useEffect, useState } from 'react'

import shuffle from '../utils/shuffle'
import useWordMatchQuizStore from '../stores/useWordMatchQuizStore'

const buttonStyle = {
  borderRadius: '0.75rem',
  padding: '1rem',
  fontWeight: 500,
  borderWidth: '2px',
  borderBottomWidth: '4px',
  cursor: 'pointer',
  transitionProperty: 'background-color, color',
  transitionDuration: '0.2s',
  transitionTimingFunction: 'ease-in-out',
  backgroundColor: '#fff',
  borderColor: '#e5e7eb',
  color: '#374151'
}

const buttonSelectedStyle = {
  ...buttonStyle,
  backgroundColor: '#e0f2fe',
  borderColor: '#bae6fd',
  color: '#0369a1'
}

const buttonCorrectStyle = {
  ...buttonStyle,
  backgroundColor: '#bbf7d0',
  borderColor: '#86efac',
  color: '#166534'
}

const buttonIncorrectStyle = {
  ...buttonStyle,
  backgroundColor: '#fecaca',
  borderColor: '#fca5a5',
  color: '#991b1b'
}

const buttonDisabledStyle = {
  ...buttonStyle,
  opacity: 0.5,
  pointerEvents: 'none'
}

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

  // helper to get button sytle
  const getButtonStyle = (type, question, answer, index) => {
    const base = buttonStyle
    const feedback = tempFeedback
    if (type === 'question') {
      if (disabledButtons.some((btn) => btn.questionId === question.id)) return buttonDisabledStyle
      if (feedback?.isCorrect === 'correct' && feedback.questionId === question.id) return buttonCorrectStyle
      if (feedback?.isCorrect === 'incorrect' && feedback.questionId === question.id) return buttonIncorrectStyle
      if (!feedback && isSelectedQuestion(question.id, question.question)) return buttonSelectedStyle
      return base
    }
    if (disabledButtons.some((btn) => btn.answerId === question.id)) return buttonDisabledStyle
    if (feedback?.isCorrect === 'correct' && feedback.answerId === question.id) return buttonCorrectStyle
    if (feedback?.isCorrect === 'incorrect' && feedback.answerId === question.id) return buttonIncorrectStyle
    if (!feedback && isSelectedAnswer(question.id, shuffledAnswers[index])) return buttonSelectedStyle
    return base
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {shuffledQuestions.map((question, index) => (
        <div key={question.id} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
          <button
            type="button"
            disabled={disabledButtons.some(
              (btn) => btn.questionId === question.id
            )}
            onClick={() => handleQuestionClick(question.question, question.id)}
            style={getButtonStyle('question', question, null, index)}
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
            style={getButtonStyle('answer', question, shuffledAnswers[index], index)}
          >
            {shuffledAnswers[index] || 'No answer available'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default WordMatchQuiz
