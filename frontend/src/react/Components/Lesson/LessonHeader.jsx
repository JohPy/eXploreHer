import React from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const LessonHeader = ({ onExit, activeStep, maxSteps, steps }) => (
  // outer box for header to be centered
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      p: 1
    }}
  >
    {/* inner box to center elements */}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'
      }}
    >
      {/* button container */}
      <Box
        sx={{ width: '50px' }}
      >
        <IconButton onClick={onExit}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* mobile stepper */}
      <Box
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {steps.map((step) => (
          <Box
            key={step.id}
            sx={(theme) => ({
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              margin: '0 4px',
              backgroundColor: theme.palette.lessonStatus[step.status].main,
              border: `1px solid ${theme.palette.lessonStatus[step.status].border}`
            })}
          />
        ))}
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          width: '50px',
          textAlign: 'right'
        }}
      >
        {`${activeStep + 1} / ${maxSteps}`}
      </Typography>
    </Box>
  </Box>
)

LessonHeader.propTypes = {
  onExit: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  maxSteps: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['correct', 'incorrect', 'current', 'unanswered', 'explanation']).isRequired
  })).isRequired
}

export default LessonHeader
