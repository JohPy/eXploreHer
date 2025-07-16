import React from 'react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import AnimatedXpCounter from './AnimtedXpCounter'

const totalDots = 8
const dotSize = 15
const circleRadius = 100
const xpGained = 25

// animation variants --> animation of container of dots
const containerVariants = {
  initial: {}, // empty at first
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const dotVariants = {
  initial: (index) => ({
    x: (index - (totalDots - 1) * (dotSize + 10)),
    y: -200
  }),
  animate: (index) => ({
    // calculating final position with circle's circumference
    x: circleRadius * Math.cos((index / totalDots) * 2 * Math.PI - Math.PI / 2),
    y: circleRadius * Math.sin((index / totalDots) * 2 * Math.PI - Math.PI / 2),
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100
    }
  })
}

const dots = Array.from({ length: totalDots }, (_, index) => ({
  id: `dot-${index}`
}))

const LessonCompletionCircle = () => (
  <Box
    sx={{
      width: '100%',
      height: 300,
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <motion.div
      style={{ position: 'relative' }}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {dots.map((dot, index) => (
        <motion.div
          key={dot.id}
          custom={index}
          variants={dotVariants}
          style={{
            position: 'absolute',
            width: dotSize,
            height: dotSize,
            backgroundColor: '#4B8F7A', // TODO: use theme.jsx
            border: '1px solid #234F42', // TODO: see above
            borderRadius: '50%'
          }}
        />
      ))}
    </motion.div>
    <motion.div // XP counter
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      style={{ position: 'absolute', textAlign: 'center' }}
    >
      <AnimatedXpCounter finalValue={xpGained} />
    </motion.div>
  </Box>
)

export default LessonCompletionCircle
