import React from 'react'
import PropTypes from 'prop-types'
import { Box, MobileStepper, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const LessonHeader = ({ onExit, activeStep, maxSteps }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: '90%',
      p: 1
    }}
  >
    <IconButton onClick={onExit} aria-label="exit lesson">
      <CloseIcon />
    </IconButton>

    <MobileStepper
      variant="dots"
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      sx={{
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& .MuiMobileStepper-dot': {
          backgroundColor: '#D7D7D7',
          border: '1px solid #7C7C7C',
          width: '10px',
          height: '10px',
          margin: '0 4px'
        },
        '& .MuiMobileStepper-dotActive': {
          backgroundColor: '#3F8E76',
          border: '1px solid #234F42'
        }
      }}
      nextButton={<span />}
      backButton={<span />}
    />

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
  maxSteps: PropTypes.number.isRequired
}

export default LessonHeader
