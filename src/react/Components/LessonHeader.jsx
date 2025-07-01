import React from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const statusStyles = {
  correct: {
    backgroundColor: '#3F8E76',
    border: '1px solid #234F42'
  },
  incorrect: {
    backgroundColor: '#F44336',
    border: '1px solid #B71C1C'
  },
  current: {
    backgroundColor: '#D7D7D7',
    border: '1px solid #7C7C7C'
  },
  unanswered: {
    backgroundColor: 'transparent',
    border: '1px solid #7C7C7C'
  }
}

const LessonHeader = ({ onExit, activeStep, maxSteps, steps }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: '95%',
      p: 1
    }}
  >
    <IconButton onClick={onExit} aria-label="exit lesson">
      <CloseIcon />
    </IconButton>

    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {steps.map((step) => (
        <Box
          key={step.id}
          sx={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            margin: '0 4px',
            ...statusStyles[step.status]
          }}
        />
      ))}
    </Box>

    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        minWidth: '50px',
        textAlign: 'right'
      }}
    >
      {`${activeStep + 1} / ${maxSteps}`}
    </Typography>
  </Box>
)

LessonHeader.propTypes = {
  onExit: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  maxSteps: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['correct', 'incorrect', 'current', 'unanswered']).isRequired
  })).isRequired
}

export default LessonHeader
