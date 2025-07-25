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
  backgroundColor: (theme) => theme.palette.berryGrey.light,
  borderColor: (theme) => theme.palette.berryGrey.main,
  color: (theme) => theme.palette.berryGrey.text,
  borderStyle: 'solid',
  textTransform: 'none',
  textAlign: 'left',
  height: '110px'
}

const buttonSelectedSx = {
  ...buttonSx,
  backgroundColor: (theme) => theme.palette.selected.background,
  borderColor: (theme) => theme.palette.selected.border,
  color: (theme) => theme.palette.selected.text
}

const buttonCorrectSx = {
  ...buttonSx,
  backgroundColor: (theme) => theme.palette.correct.transparent,
  borderColor: (theme) => theme.palette.correct.main,
  color: (theme) => theme.palette.correct.text
}

const buttonIncorrectSx = {
  ...buttonSx,
  backgroundColor: (theme) => theme.palette.wrong.transparent,
  borderColor: (theme) => theme.palette.wrong.main,
  color: (theme) => theme.palette.wrong.main
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
  questionId: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonType: PropTypes.oneOf(['regular', 'selected', 'correct', 'incorrect', 'disabled']).isRequired
}

export default QuizButton
