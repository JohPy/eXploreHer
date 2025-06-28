import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import * as React from 'react'

const SmallBubble = ({ x, y, show = 'none' }) => (
  <Box
    sx={{
      position: 'absolute',
      // coordinates are originally moving the element by its left top corner
      left: x,
      top: y,
      // moving point is changed to the middle bottom through transform
      transform: 'translate(-50%, -100%)',
      // zIndex ensures that SmallBubble lays on top of the circle segments
      zIndex: 10,
      display: show ? 'flex' : 'none'
    }}
  >
    <svg
      width={133}
      height={55}
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <path
        d="M1 12C1 5.925 5.925 1 12 1h109c6.075 0 11 4.925 11 11v21.647c0 6.075-4.925 11-11 11H83.094a2 2 0 00-1.092.324l-12.184 7.935a3 3 0 01-3.334-.04L55.01 44.998a2 2 0 00-1.13-.35H12c-6.075 0-11-4.926-11-11V12z"
        fill="#fff"
        stroke="#E5E5E5"
        strokeWidth={2}
      />
    </svg>
    <Box
      sx={{
          width: 133,
          height: 55,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#AC2C5F',
          position: 'relative'
        }}
    >
      <Typography
        sx={{
            textTransform: 'uppercase',
            fontSize: '1rem',
            fontWeight: 'bold',
            opacity: 0.8
          }}
      >
        Anfangen
      </Typography>
    </Box>
  </Box>
)

SmallBubble.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  show: PropTypes.any
}

export default SmallBubble
