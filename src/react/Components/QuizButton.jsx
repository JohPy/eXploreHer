import React from 'react'
import PropTypes from 'prop-types'

const QuizButton = ({
  disabled,
  text,
  questionId,
  handleClick,
  style
}) => (
  <button
    type="button"
    disabled={disabled}
    onClick={() => handleClick(text, questionId)}
    style={style}
  >
    {text}
  </button>
)

QuizButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired
}

export default QuizButton
