import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import React, { useState } from 'react'

const LectionManager = () => {
  // Only for testing - actual implementation should go into json / database
  const MOCK_LECTIONS = {
    1: [
      {
        id: 101, // To identify the question when saving user mistakes
        task: 'Was passiert während der Follikelphase im Eierstock?', // This can be a question or an instruction like "Ordne diese Begriffe richtig zu"
        format: 'multiple-choice', // This is needed by the QuestionRender to know which component to load
        content: // This can be an image or answer options - the format needs to be flexible
        ['Das Corpus luteum bildet sich',
          'Ein Follikel reift heran und produziert Östrogen',
          'Mix Die Gebärmutterschleimhaut wird abgestoßen beidem',
          'Die Eizelle wird befruchtet'],
        explanation: 'In der Follikelphase reifen die Eibläschen (Follikel) heran' // Optional explanation text after submitting an answer
      }
    ]
  }
  const { id } = useParams()
  const lection = MOCK_LECTIONS[Number(id)]
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentQuestion = lection[currentIndex]

  const goToNext = () => {
    if (currentIndex < lection.length - 1) {
      setCurrentIndex(i => i + 1)
    } else {
      // TO DO: show success screen in the end
    }
  }

  return (
    <div>
      {/* TO DO: Render points list */}
      {/* TO DO: Dynamically load questions
      <QuestionRenderer question={currentQuestion} /> */}
      {/* TO DO: Load Button as component instead */}
      <Button onClick={goToNext}>Weiter</Button>
    </div>
  )
}

export default LectionManager
