import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, LinearProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

// round border linear progress bar
const BorderLinearProgress = styled(LinearProgress)(({ barcolor, progresscolor }) => ({
  height: 12,
  borderRadius: 6,
  backgroundColor: progresscolor,
  '& .MuiLinearProgress-bar': {
    borderRadius: 6,
    backgroundColor: barcolor,
    transition: 'transform .4s linear'
  }
}))

const ProgressStepper = ({ label, currentValue, maxValue, barColor, progressColor, EndIcon }) => {
  const progressValue = (currentValue / maxValue) * 100

  return (
    <Box sx={{ width: '100%', marginY: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'text.secondary' }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'text.secondary' }}>
          {currentValue}
          /
          {maxValue}
        </Typography>
      </Box>

      {/* progress bar and icon container */}
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <BorderLinearProgress
          vairant="determinate"
          value={progressValue}
          sx={{ width: '100%' }}
          barcolor={barColor}
          progresscolor={progressColor}
        />
        {/* dot with icon at the end */}
        <Box sx={{ position: 'absolute', right: 0, left: '&{progressValue}', transform: 'translateX(-50%)' }}>
          {EndIcon}
        </Box>
      </Box>
    </Box>
  )
}

ProgressStepper.propTypes = {
  label: PropTypes.string.isRequired,
  currentValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  barColor: PropTypes.string.isRequired,
  progressColor: PropTypes.string.isRequired,
  EndIcon: PropTypes.element.isRequired
}

export default ProgressStepper
