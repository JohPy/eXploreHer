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
  textAlign: 'left'
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
  text,
  handleClick,
  index,
  buttonType
}) => (
  <Button
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
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  buttonType: PropTypes.oneOf(['regular', 'correct', 'incorrect']).isRequired
}

export default ChoiceButton
