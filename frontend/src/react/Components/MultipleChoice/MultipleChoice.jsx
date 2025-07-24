import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import ChoiceButton from './ChoiceButton'

const containerStyle = {
  padding: '32px',
  maxWidth: '600px',
  margin: '40px auto',
  boxSizing: 'border-box'
}

const getButtonType = (selected, correct) => {
  if (selected && correct) return 'correct'
  if (selected && !correct) return 'incorrect'
  return 'regular'
}

const MultipleChoice = ({ content = [], onCorrectChange }) => {
  const [selectedIdx, setSelectedIdx] = useState(null)
  const [answered, setAnswered] = useState(false)

  const hasReported = useRef(false)

  useEffect(() => {
    if (selectedIdx !== null && !hasReported.current) {
      if (content[selectedIdx]?.isCorrect) {
        setAnswered(true)
        onCorrectChange(true)
        hasReported.current = true
      } else {
        onCorrectChange(false)
        hasReported.current = true
      }
    }
  }, [selectedIdx, content, onCorrectChange])

  const handleClick = (idx) => {
    if (answered) return
    setSelectedIdx(idx)
  }

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {content.map((item, idx) => (
          <ChoiceButton
            key={item.text}
            type="button"
            disabled={answered}
            handleClick={handleClick}
            buttonType={getButtonType(selectedIdx === idx, item.isCorrect)}
            index={idx}
            text={item.text}
          />
        ))}
      </div>
    </div>
  )
}

MultipleChoice.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      isCorrect: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  onCorrectChange: PropTypes.func.isRequired
}

export default MultipleChoice
