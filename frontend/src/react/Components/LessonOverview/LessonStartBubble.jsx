import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as React from 'react'
import { useTheme } from '@mui/material/styles'

const LessonStartBubble = ({ y, show = 'false', lessonNum = '1', lessonCount = '5' }) => {
  const titleList = [
    'Die Phasen deines Zyklus',
    'Wenn die Hormone jubeln...',
    'Ernährung & Sport im Zyklus',
    'Unregelmäßigkeiten im Zyklus',
    'Abschlusstest'
  ]
  const lessonTitle = titleList[lessonNum - 1]

  const navigate = useNavigate()

  const handleLessonStart = (id) => {
    navigate(`/lessons/${id}`)
  }

  const theme = useTheme()
  const themeColor = theme.palette.primary.main

  return (
    <Box
      sx={{
        position: 'absolute',
        // coordinates are originally moving the element by its left top corner
        left: '50%',
        top: y,
        // moving point is changed to the middle top through transform
        transform: 'translate(-50%, -0%)',
        // zIndex ensures that LessonStartBubble lays on top of the circle segments
        zIndex: 11,
        display: show ? 'flex' : 'none',
        width: '90%',
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
          fill={themeColor}
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
          flexDirection: 'column'
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '0.9rem',
              sm: '1.1rem'
            },
            fontWeight: 'bold'
          }}
        >
          {lessonTitle}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: '0.8rem',
              sm: '1rem'
            },
            fontWeight: 'regular',
            opacity: 0.7
          }}
        >
          Lektion
          {' '}
          {lessonNum}
          {' '}
          von
          {' '}
          {lessonCount}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fff',
            color: 'primary.main',
            fontWeight: 'bold',
            mt: 1,
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: '#f2f2f2'
            }
          }}
          onClick={() => handleLessonStart(lessonNum)}
        >
          Anfangen + 15 XP
        </Button>
      </Box>
    </Box>
  )
}

LessonStartBubble.propTypes = {
  y: PropTypes.number,
  show: PropTypes.any,
  lessonNum: PropTypes.number,
  lessonCount: PropTypes.number
}

export default LessonStartBubble
