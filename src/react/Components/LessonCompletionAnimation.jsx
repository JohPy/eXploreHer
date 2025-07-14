import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Typography } from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'

// animations with keyframes (@emotion library)
const popAndFadeUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0) scale (0.8)
  }
  100% {
    opacity: 0;
    transform: translateY(-60px) scale(2)
  }
`

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`

// styled componentes
const AnimatedDot = styled(Box)(({ theme }) => ({
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  position: 'absolute',
  backgroundColor: '#4B8F7AFF', // when lesson-header is merged: theme.palette.lessonStatus.correct.main,
  transition: 'top 0.8 ease-in-out, left 0.8s ease-in-out, 0.5s ease-in'
}))

const XpDisplay = styled(Typography)`
  font-weight: 900;
  text-shadow: 2px 2px 8px #000000ff
`

// when lesson-header is merged: color: ${({ theme }) => theme.palette.lessonStatus.correct.main}
const FloatingPoint = styled(Typography)`
  position: absolute;
  color: #4B8F7AFF;
  font-weight: bold;
  animation: ${popAndFadeUp} 0.7s ease-out forward
`

const FinalScore = styled(Typography)`
  animation: ${fadeInUp} 0.5s ease-out forwards;
  opacity: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-top: 8xp
`

// LessonCompletionAnimation component
const LessonCompletionAnimation = ({ onFinish }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedXp, setDisplayXp] = useState(0)
  const [floatingPoints, setFloatingPoints] = useState([])
  const [isCountingFinished, setIsCountingFinished] = useState(false)

  const numberOfDots = 8
  const xpGained = 25

  const dotPositions = []
  const radius = 80 // radius of reward cicle
  for (let i = 0; i < numberOfDots; i++) {
    const angle = (i / numberOfDots) * 2 * Math.PI
    dotPositions.push({
      top: `calc(50% - ${radius * Math.sin(angle)}px)`,
      left: `calc(50% + ${radius * Math.cos(angle)}px)`
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isAnimating) return

    let intervalId
    const startDelay = 1200 // 1.2s
    const countInterval = 60
    const startTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        setDisplayXp((prev) => {
          if (prev >= xpGained) {
            clearInterval(intervalId)
            setIsCountingFinished(true)
            return xpGained
          }

          const newPoint = { id: Date.now() + Math.random() }
          setFloatingPoints((points) => [...points, newPoint])

          setTimeout(() => {
            setFloatingPoints((currentPoints) => currentPoints.filter((p) => p.id !== newPoint.id))
          }, 700)
          return prev + 1
        })
      }, countInterval)
    }, startDelay)

    return () => {
      clearTimeout(startTimer)
      if (intervalId) clearInterval(intervalId)
    }
  }, [isAnimating])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {dotPositions.map((pos, index) => (
        <AnimatedDot
          key={index}
          sx={{
            transitionDelay: `${index * 0.1}s`,
            top: isAnimating ? pos.top : '5%',
            left: isAnimating ? pos.left : '50%',
            transform: isAnimating ? 'translate(-50%, -50%)' : 'translateX(-50%)',
            opacity: isAnimating ? 1 : 0
          }}
        />
      ))}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}
      >
        <XpDisplay variant="h2">
          {displayedXp}
        </XpDisplay>
        {floatingPoints.map((point) => (
          <FloatingPoint key={point.id}>
            +1
          </FloatingPoint>
        ))}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          textAlign: 'center'
        }}
      >
        <Typography variant="h5"> Lesson Complete! </Typography>
        <Button variant="contained" onClick={onFinish} sx={{ mt: 2 }}>
          Abschließen
        </Button>
        {isCountingFinished && <FinalScore>+{xpGained} XP</FinalScore>}
      </Box>
    </Box>
  )
}

LessonCompletionAnimation.propTypes = {
  onFinish: PropTypes.func.isRequired
}

export default LessonCompletionAnimation
