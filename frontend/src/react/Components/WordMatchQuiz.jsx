import React, { useMemo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import shuffle from '../utils/shuffle'
import useWordMatchQuiz from '../../hooks/useWordMatchQuiz'
import QuizButton from './QuizButton'

const containerStyle = {
  padding: '32px',
  maxWidth: '600px',
  margin: '40px auto',
  boxSizing: 'border-box'
}

const WordMatchQuiz = ({
  questions = [],
  onCorrectChange
}) => {
  const {
    selectedQuestion,
    selectedAnswer,
    disabledButtons,
    selectAnswer,
    selectQuestion,
    checkAnswer,
    disableButton
  } = useWordMatchQuiz(questions)

  const shuffledQuestions = useMemo(() => shuffle(questions), [questions])
  const shuffledAnswers = useMemo(() => shuffle(questions.map((q) => q.answer)), [questions])

  const [tempFeedback, setTempFeedback] = useState()

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
      questions.length > 0 &&
      disabledButtons.length === questions.length
    ) {
      onCorrectChange(true)
    }
  }, [disabledButtons, questions, onCorrectChange])

  useEffect(() => {
    if (
      selectedQuestion?.question &&
    selectedAnswer?.answer &&
    selectedQuestion.id &&
    selectedAnswer.id
    ) {
      const isCorrect = checkAnswer(selectedQuestion.question, selectedAnswer.answer)

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
          disableButton(questionId, answerId)
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

  // helper to get button type
  const getButtonType = (type, question, answer, index) => {
    const base = 'regular'
    const feedback = tempFeedback
    if (type === 'question') {
      if (disabledButtons.some((btn) => btn.questionId === question.id)) return 'disabled'
      if (feedback?.isCorrect === 'correct' && feedback.questionId === question.id) return 'correct'
      if (feedback?.isCorrect === 'incorrect' && feedback.questionId === question.id) return 'incorrect'
      if (!feedback && isSelectedQuestion(question.id, question.question)) return 'selected'
      return base
    }
    if (disabledButtons.some((btn) => btn.answerId === question.id)) return 'disabled'
    if (feedback?.isCorrect === 'correct' && feedback.answerId === question.id) return 'correct'
    if (feedback?.isCorrect === 'incorrect' && feedback.answerId === question.id) return 'incorrect'
    if (!feedback && isSelectedAnswer(question.id, shuffledAnswers[index])) return 'selected'
    return base
  }

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {shuffledQuestions.map((question, index) => (
          <div key={question.id} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
            <QuizButton
              disabled={disabledButtons.some(
                (btn) => btn.questionId === question.id
              )}
              text={question.question}
              questionId={question.id}
              handleClick={handleQuestionClick}
              buttonType={getButtonType('question', question, null, index)}
            />
            <QuizButton
              disabled={disabledButtons.some(
                (btn) => btn.answerId === question.id
              )}
              text={shuffledAnswers[index] || 'No answer available'}
              questionId={question.id}
              handleClick={handleAnswerClick}
              buttonType={getButtonType('answer', question, shuffledAnswers[index], index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

WordMatchQuiz.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  ),
  onCorrectChange: PropTypes.func.isRequired
}

export default WordMatchQuiz
