import { Box, Typography } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useRef, useCallback } from 'react'

import LessonHeader from '../Components/Lesson/LessonHeader'
import Exercise from '../Components/Lesson/Exercise'
import CycleCalendar from '../Components/Images/CycleCalendar'
import LessonFooter from '../Components/Lesson/LessonFooter'

const Lesson = () => {
  // Only for testing - actual implementation should go into json / database
  const MOCK_LESSONS = {
    1: [
      {
        id: '101',
        task: 'Ziehe die Phasen zur richtigen Lösung',
        type: 'drag-and-drop',
        fields: [
          { id: 'follikel', label: 'Follikelphase', position: { top: '5%', right: '0%' } },
          { id: 'luteal', label: 'Lutealphase', position: { top: '88%', left: '0%' } }
        ],
        ImageComponent: CycleCalendar
      },
      {
        id: '102',
        task: null,
        type: 'explanation',
        text: 'In der <b>Follikelphase</b> macht sich dein Körper startklar: Ein Eibläschen (Follikel) reift heran, die Gebärmutterschleimhaut wird schick gemacht – alles für den großen Eisprung-Auftritt. Danach chillt dein Körper in der <b>Lutealphase</b>. Showtime jeden Monat!'
      // },
      // {
      //   id: '103', // To identify the question when saving user mistakes
      //   task: 'Was passiert während der Follikelphase im Eierstock?', // This can be a question or an instruction like "Ordne diese Begriffe richtig zu"
      //   type: 'multiple-choice', // This is needed by the QuestionRender to know which component to load
      //   content: [ // This can be an image path or answer options - the format needs to be flexible
      //     { correct: false, text: 'Das Corpus luteum bildet sich' },
      //     { correct: true, text: 'Ein Follikel reift heran und produziert Östrogen' },
      //     { correct: false, text: 'Die Gebärmutterschleimhaut wird abgestoßen' },
      //     { correct: false, text: 'Die Eizelle wird befruchtet' }
      //   ],
      //   explanation: 'In der Follikelphase reifen die Eibläschen (Follikel) heran' // Optional explanation text after submitting an answer
      },
      {
        id: '103',
        task: 'Finde die passenden Paare',
        type: 'word-match-quiz',
        questions: [
          {
            id: '1',
            question: 'Follikelphase',
            answer: 'Einer der herangreiften Follikel wird dominant und produziert das Hormon Östrogen'
          },
          {
            id: '2',
            question: 'Eisprung',
            answer: 'Die freigesetzte Eizelle wird in den Eileiter transportiert'
          },
          {
            id: '3',
            question: 'Menstruation',
            answer: 'Die Gebärmutter stößt ihre innere Auskleidung aus Weichteilen und Blutgefäßen ab'
          },
          {
            id: '4',
            question: 'Lutealphase',
            answer: 'Der geplatzte Follikel wird zum Gelbkörper (Corpus luteum) und produziert Progesteron'
          }
        ]
      }
    ]
  }

  const { id } = useParams()
  const lesson = MOCK_LESSONS[Number(id)]
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentExercise = lesson[currentIndex]
  const navigate = useNavigate()
  const [footerStatus, setFooterStatus] = useState('disabled')

  const [answerStatuses, setAnswerStatuses] = useState(
    Array(lesson.length).fill('unanswered')
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

  const headerSteps = lesson.map((exercise, index) => {
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

    if (currentIndex < lesson.length - 1) {
      setCurrentIndex(i => i + 1)
      setFooterStatus('disabled')
    } else {
      navigate('/completion')
    }
  }

  const containerRef = useRef()

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
          maxSteps={lesson.length}
          steps={headerSteps}
        />
        <Typography
          sx={{ mt: 2, mb: 1, mx: 4, textAlign: 'left', fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, fontWeight: 'bold' }}
        >
          {currentExercise.task}
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
        <LessonFooter status={footerStatus} onClick={goToNext} explanation={currentExercise.explanation} containerRef={containerRef} />
      </Box>
    </Box>
  )
}

export default Lesson
