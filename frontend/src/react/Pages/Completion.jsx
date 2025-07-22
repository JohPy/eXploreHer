import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, Button, Stack, Typography } from '@mui/material'
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
    size: 30 + Math.random() * 5,
    rotation: Math.random() * 360,
    delay: Math.random() * 0.5
  })), [correctAnswers])

  return (
    <Stack sx={{ height: '100%', alignItems: 'center', justifyContent: 'space-between', p: 2, boxSizing: 'border-box' }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '15vh' }}>
        <LessonCompletionAnimation />
      </Box>

      <Stack spacing={5} sx={{ width: '100%', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Lektion geschafft!
        </Typography>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
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
