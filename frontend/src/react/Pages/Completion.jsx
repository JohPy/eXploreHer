import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import LessonCompletionAnimation from '../Components/Completion/LessonCompletionCircle'
import Star from '../Components/Completion/Star'

const starContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const Completion = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleFinish = () => {
    navigate('/')
  }

  // for mock and error purposes correctAnswers = 8
  const { correctAnswers = 8 } = location.state || {}
  // useMemo() to make random props of each star (to have wowie animation effect)
  const starData = useMemo(() => Array.from({ length: correctAnswers }, (_, index) => ({
    id: `star-${index}`,
    top: `${65 + Math.random() * 15}%`,
    left: `${30 + Math.random() * 30}%`,
    size: 40 + Math.random() * 50,
    rotation: Math.random() * 360,
    delay: Math.random() * 1
  })), [correctAnswers])

  return (
    <Stack sx={{ height: '100%', alignItems: 'center', justifyContent: 'space-between', p: 2, boxSizing: 'border-box' }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
        8 / 8
      </Typography>

      <LessonCompletionAnimation />

      <Stack spacing={3} sx={{ width: '100%', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          {`Du hast ${correctAnswers} Aufgaben richtig!`}
        </Typography>
        {correctAnswers > 0 && (
          <motion.div
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              maxWidth: '350px'
            }}
            variants={starContainerVariants}
            initial="initial"
            animate="animate"
          >
            {starData.map((star) => (
              <Star
                key={star.id}
                top={star.top}
                left={star.left}
                size={star.size}
                rotation={star.rotation}
                delay={star.delay}
              />
            ))}
          </motion.div>
        )}

        {/* placeholder button */}
        <Button
          onClick={handleFinish}
          variant="contained"
        >
          Abschließen
        </Button>
      </Stack>
    </Stack>
  )
}

export default Completion
