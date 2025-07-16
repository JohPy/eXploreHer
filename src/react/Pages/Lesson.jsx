import { Button, Box } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import LessonHeader from '../Components/Lesson/LessonHeader'

const Lesson = () => {
  // Only for testing - actual implementation should go into json / database
  const MOCK_LESSONS = {
    1: [
      {
        id: 101, // To identify the question when saving user mistakes
        task: 'Was passiert während der Follikelphase im Eierstock?', // This can be a question or an instruction like "Ordne diese Begriffe richtig zu"
        format: 'multiple-choice', // This is needed by the QuestionRender to know which component to load
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
    <div>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}
      >
        <LessonHeader
          onExit={handleExit}
          activeStep={currentIndex}
          maxSteps={lesson.length}
          steps={headerSteps}
        />
        {/* TO DO: Dynamically load questions
        <Exercise exercise={currentExercise} /> */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            p: 3
          }}
        >
          <h2>{currentExercise.task}</h2>
        </Box>
      </Box>
      {/* TO DO: Load Button as component instead */}
      <Button onClick={goToNext}>Weiter</Button>
    </div>
  )
}

export default Lesson
