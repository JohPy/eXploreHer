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
  justifyContent: 'flex-start',
  '&.Mui-disabled': {
    backgroundColor: (theme) => theme.palette.berryGrey.light,
    borderColor: (theme) => theme.palette.berryGrey.main,
    color: (theme) => theme.palette.berryGrey.text,
    opacity: 1
  }
}

const buttonCorrectSx = {
  ...buttonSx,
  backgroundColor: (theme) => theme.palette.correct.transparent,
  borderColor: (theme) => theme.palette.correct.main,
  color: (theme) => theme.palette.correct.text,
  '&.Mui-disabled': {
    backgroundColor: (theme) => theme.palette.correct.transparent,
    borderColor: (theme) => theme.palette.correct.main,
    color: (theme) => theme.palette.correct.text,
    opacity: 1
  }
}

const buttonIncorrectSx = {
  ...buttonSx,
  backgroundColor: (theme) => theme.palette.wrong.transparent,
  borderColor: (theme) => theme.palette.wrong.main,
  color: (theme) => theme.palette.wrong.main,
  '&.Mui-disabled': {
    backgroundColor: (theme) => theme.palette.wrong.transparent,
    borderColor: (theme) => theme.palette.wrong.main,
    color: (theme) => theme.palette.wrong.main,
    opacity: 1
  }
}

const getButtonSx = (buttonType) => {
  switch (buttonType) {
    case 'correct':
      return buttonCorrectSx
    case 'incorrect':
      return buttonIncorrectSx
    default:
      return buttonSx
  }
}

const ChoiceButton = ({
  disabled,
  text,
  handleClick,
  index,
  buttonType
}) => (
  <Button
    disabled={disabled}
    type="button"
    onClick={() => handleClick(index)}
    sx={getButtonSx(buttonType)}
    variant="outlined"
    fullWidth
  >
    {text}
  </Button>
)

ChoiceButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  buttonType: PropTypes.oneOf(['regular', 'correct', 'incorrect']).isRequired
}

export default ChoiceButton
