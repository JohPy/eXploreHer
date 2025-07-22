import { Button, Box, Typography } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import LessonHeader from '../Components/Lesson/LessonHeader'
import Exercise from '../Components/Lesson/Exercise'
import CycleCalendar from '../Components/Images/CycleCalendar'

const Lesson = () => {
  // Only for testing - actual implementation should go into json / database
  const MOCK_LESSONS = {
    1: [
      {
        id: '102',
        task: 'Ziehe die Phasen zur richtigen Lösung',
        type: 'drag-and-drop',
        fields: [
          { id: 'follikel', label: 'Follikelphase', position: { top: '5%', right: '0%' } },
          { id: 'luteal', label: 'Lutealphase', position: { top: '88%', left: '0%' } }
        ],
        ImageComponent: CycleCalendar
      },
      {
        id: '101', // To identify the question when saving user mistakes
        task: 'Was passiert während der Follikelphase im Eierstock?', // This can be a question or an instruction like "Ordne diese Begriffe richtig zu"
        type: 'multiple-choice', // This is needed by the QuestionRender to know which component to load
        content: [ // This can be an image path or answer options - the format needs to be flexible
          { correct: false, text: 'Das Corpus luteum bildet sich' },
          { correct: true, text: 'Ein Follikel reift heran und produziert Östrogen' },
          { correct: false, text: 'Die Gebärmutterschleimhaut wird abgestoßen' },
          { correct: false, text: 'Die Eizelle wird befruchtet' }
        ],
        explanation: 'In der Follikelphase reifen die Eibläschen (Follikel) heran' // Optional explanation text after submitting an answer
      }
    ]
  }

  const { id } = useParams()
  const lesson = MOCK_LESSONS[Number(id)]
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentExercise = lesson[currentIndex]
  const navigate = useNavigate()
  const [isCorrect, setIsCorrect] = useState()

  const handleAnswer = (correct) => {
    setIsCorrect(correct)
    console.log(`Answer is ${isCorrect}`)
    // TO DO: Enable button when answer is logged and provide feedback
  }

  const handleExit = () => {
    navigate('/')
  }

  const headerSteps = lesson.map((exercise, index) => ({
    id: exercise.id,
    status: index === currentIndex ? 'current' : 'unanswered'
  }))

  const goToNext = () => {
    if (currentIndex < lesson.length - 1) {
      setCurrentIndex(i => i + 1)
    } else {
      navigate('/completion')
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      {/* Fixate header and exercise task at the top */}
      <Box sx={{ flexShrink: 0 }}>
        <LessonHeader
          onExit={handleExit}
          activeStep={currentIndex}
          maxSteps={lesson.length}
          steps={headerSteps}
        />
        <Typography
          sx={{ mt: 2, mb: 1, mx: 2, textAlign: 'left', fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' }, fontWeight: 'bold' }}
        >
          {currentExercise.task}
        </Typography>
      </Box>

      {/* Controll size of the exercise by defining maxWidt and */}
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
          <Exercise exercise={currentExercise} onCorrectChange={handleAnswer} />
        </Box>
      </Box>

      <Box sx={{ flexShrink: 0, p: 2, textAlign: 'center' }}>
        <Button variant="contained" sx={{ width: '100%', minHeight: 45, borderRadius: '12px' }} onClick={goToNext}>
          Weiter
        </Button>
      </Box>
    </Box>
  )
}

export default Lesson
