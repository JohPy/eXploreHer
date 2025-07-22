import React from 'react'
import PropTypes from 'prop-types'

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

const getButtonStyle = (buttonType) => {
  switch (buttonType) {
    case 'disabled':
      return buttonDisabledStyle
    case 'correct':
      return buttonCorrectStyle
    case 'incorrect':
      return buttonIncorrectStyle
    case 'selected':
      return buttonSelectedStyle
    default:
      return buttonStyle
  }
}

const QuizButton = ({
  disabled,
  text,
  questionId,
  handleClick,
  buttonType
}) => (
  <button
    type="button"
    disabled={disabled}
    onClick={() => handleClick(text, questionId)}
    style={getButtonStyle(buttonType)}
  >
    {text}
  </button>
)

QuizButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonType: PropTypes.oneOf(['regular', 'selected', 'correct', 'incorrect', 'disabled']).isRequired
}

export default QuizButton
