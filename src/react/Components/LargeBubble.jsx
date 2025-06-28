import { Box, Typography, Button } from '@mui/material'
import PropTypes from 'prop-types'
import * as React from 'react'

const LargeBubble = ({ y, show = 'false', lectionNum = '1', lectionCount = '5' }) => {
  const titleList = [
    'Die Phasen deines Zyklus',
    'Wenn die Hormone jubeln...',
    'Ernährung & Sport im Zyklus',
    'Unregelmäßigkeiten im Zyklus',
    'Abschlusstest'
  ]
  const lectionTitle = titleList[lectionNum - 1]

  return (
    <Box
      sx={{
      position: 'absolute',
      // coordinates are originally moving the element by its left top corner
      left: '50%',
      top: y,
      // moving point is changed to the middle top through transform
      transform: 'translate(-50%, -0%)',
      // zIndex ensures that LargeBubble lays on top of the circle segments
      zIndex: 11,
      display: show ? 'flex' : 'none',
      width: '300px',
      maxWidth: '90vw'
    }}
    >
      <svg
        viewBox="0 0 300 200"
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0, filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.9))' }}
      >
        <path
          d="M1 185c0 6.075 4.925 11 11 11h279c6.075 0 11-4.925 11-11V33.703c0-6.075-4.925-11-11-11H173.562a2.002 2.002 0 01-1.556-.743L156.53 2.816a3 3 0 00-4.62-.055l-16.329 19.236a2 2 0 01-1.525.706H12c-6.075 0-11 4.925-11 11V185z"
          fill="#AC2C5F"
          stroke="#fff"
          strokeWidth={0.4}
        />
      </svg>
      <Box
        sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        position: 'relative',
        pt: '3em',
        px: '1em',
        flexDirection: 'column',
        gap: 1
      }}
      >
        <Typography
          sx={{
          fontSize: '1.3rem',
          fontWeight: 'bold'
        }}
        >
          {lectionTitle}
        </Typography>
        <Typography
          sx={{
          fontSize: '1.2rem',
          fontWeight: 'regular',
          opacity: 0.7
        }}
        >
          Lektion
          {' '}
          {lectionNum}
          {' '}
          von
          {' '}
          {lectionCount}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fff',
            color: '#AC2C5F',
            fontWeight: 'bold',
            mt: 1,
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: '#f2f2f2'
            }
          }}
        >
          Anfangen + 15 XP
        </Button>
      </Box>
    </Box>
  )
}

  LargeBubble.propTypes = {
      y: PropTypes.number,
      show: PropTypes.any,
      lectionNum: PropTypes.number,
      lectionCount: PropTypes.number
  }

export default LargeBubble
