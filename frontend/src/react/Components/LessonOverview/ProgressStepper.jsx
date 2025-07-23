import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

const ProgressStepper = ({ label, currentValue, maxValue, barColor, progressColor, EndIcon }) => {
  const progressPercent = maxValue > 0 ? (currentValue / maxValue) * 100 : 0

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'text.secondary' }}>
          {label}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'text.secondary' }}>
          {currentValue}
          /
          {maxValue}
        </Typography>
      </Box>

      {/* progress bar and icon container */}
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {/* bar */}
        <Box
          sx={{
            width: '100%',
            height: 12,
            borderRadius: 6,
            backgroundColor: barColor
          }}
        >
          {/* progress part bar */}
          <Box
            sx={{
              height: '100%',
              width: `${progressPercent}%`, // progress
              borderRadius: 6,
              backgroundColor: progressColor
            }}
          />
        </Box>
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
