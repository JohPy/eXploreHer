import { Box, Typography } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useRef, useCallback } from 'react'

import LessonHeader from '../Components/Lesson/LessonHeader'
import Exercise from '../Components/Lesson/Exercise'
import LessonFooter from '../Components/Lesson/LessonFooter'
import { useCourseContentContext } from '../contexts/course-context'
import { mockDragAndDropExercise, mockExplanationExercise } from '../../utils/defaults'

const Lesson = () => {
  const { currentChapter, currentChapterIndex } = useCourseContentContext()
  const { id } = useParams()
  const lessonNumber = Number(id)
  const lessons = currentChapter?.lessons
  const lesson = lessons?.[lessonNumber - 1] || []
  const exercises = [...lesson.Exercises, mockExplanationExercise, mockDragAndDropExercise]
  const exercisesCount = exercises.length || 4
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentExercise = exercises[currentIndex]
  const navigate = useNavigate()
  const [footerStatus, setFooterStatus] = useState('disabled')

  const [answerStatuses, setAnswerStatuses] = useState(
    Array(exercisesCount).fill('unanswered')
  )

  // When the user provided an answer, give fedback and save points
  const handleAnswer = useCallback((correct) => {
    // If it's just an explanation and not an exercise, enable the button immediatly
    if (correct === null) {
      setFooterStatus('continue')
    } else {
      setFooterStatus(correct ? 'correct' : 'wrong')

      const newStatuses = [...answerStatuses]
      newStatuses[currentIndex] = correct ? 'correct' : 'incorrect'
      setAnswerStatuses(newStatuses)
    }
  }, [currentIndex, answerStatuses])

  const handleExit = () => {
    navigate('/')
  }

  const headerSteps = exercises.map((exercise, index) => {
    let status
    if (index !== currentIndex) {
      status = answerStatuses[index]
    } else if (exercise.task === null) { // if null = explanation screen
      status = 'explanation'
    } else {
      status = 'current'
    }

    return {
      id: exercise.id,
      status
    }
  })

  const goToNext = () => {
    if (currentExercise.task === null) {
      const newStatuses = [...answerStatuses]
      newStatuses[currentIndex] = 'explanation'
      setAnswerStatuses(newStatuses)
    }

    if (currentIndex < exercisesCount - 1) {
      setCurrentIndex(i => i + 1)
      setFooterStatus('disabled')
    } else {
      const correctAnswersCount = answerStatuses.filter(status => status === 'correct').length
      navigate('/completion', { state: { correctAnswers: correctAnswersCount, lessonNumber, chapterNumber: currentChapterIndex } })
    }
  }

  const containerRef = useRef()

  if (!exercises) {
    return (<div>Loading...</div>)
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      {/* Fixate header and exercise task at the top */}
      <Box sx={{ flexShrink: 0 }}>
        <LessonHeader
          onExit={handleExit}
          activeStep={currentIndex}
          maxSteps={exercisesCount}
          steps={headerSteps}
        />
        <Typography
          sx={{ mt: 2, mb: 1, mx: 4, textAlign: 'left', fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, fontWeight: 'bold' }}
        >
          {currentExercise?.task}
        </Typography>
      </Box>

      {/* Controll size of the exercise by defining maxWidth */}
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          py: 2
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '800px',
            height: '100%',
            maxHeight: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Exercise exercise={currentExercise} onComplete={handleAnswer} />
        </Box>
      </Box>

      <Box sx={{ flexShrink: 0, p: 2, textAlign: 'center' }}>
        <LessonFooter status={footerStatus} onClick={goToNext} explanation={currentExercise?.explanation} containerRef={containerRef} />
      </Box>
    </Box>
  )
}

export default Lesson
