import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

const buttonSx = {
  borderRadius: '0.75rem',
  p: '1rem',
  fontWeight: 500,
  borderWidth: '2px',
  borderBottomWidth: '4px',
  cursor: 'pointer',
  transitionProperty: 'background-color, color',
  transitionDuration: '0.2s',
  transitionTimingFunction: 'ease-in-out',
  backgroundColor: '#e8e8f0',
  borderColor: '#b4b4cd',
  color: '#374151',
  borderStyle: 'solid',
  textTransform: 'none',
  height: '105px'
}

const buttonSelectedSx = {
  ...buttonSx,
  backgroundColor: '#e0f2fe',
  borderColor: '#bae6fd',
  color: '#0369a1'
}

const buttonCorrectSx = {
  ...buttonSx,
  backgroundColor: '#ddfbe7',
  borderColor: '#86efac',
  color: '#166534'
}

const buttonIncorrectSx = {
  ...buttonSx,
  backgroundColor: '#fbdde9',
  borderColor: '#e5196b',
  color: '#e5196b'
}

const buttonDisabledSx = {
  ...buttonSx,
  opacity: 0.5,
  pointerEvents: 'none'
}

const getButtonSx = (buttonType) => {
  switch (buttonType) {
    case 'disabled':
      return buttonDisabledSx
    case 'correct':
      return buttonCorrectSx
    case 'incorrect':
      return buttonIncorrectSx
    case 'selected':
      return buttonSelectedSx
    default:
      return buttonSx
  }
}

const QuizButton = ({
  disabled,
  text,
  questionId,
  handleClick,
  buttonType
}) => (
  <Button
    type="button"
    disabled={disabled}
    onClick={() => handleClick(text, questionId)}
    sx={getButtonSx(buttonType)}
    variant="outlined"
    fullWidth
  >
    {text}
  </Button>
)

QuizButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonType: PropTypes.oneOf(['regular', 'selected', 'correct', 'incorrect', 'disabled']).isRequired
}

export default QuizButton
