import React from 'react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import AnimatedXpCounter from './AnimtedXpCounter'

const totalDots = 8
const dotSize = 20
const circleRadius = 130
const xpGained = 25

// animation variants
// animation of container of dots
const containerVariants = {
  initial: {}, // empty at first
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// single dot animation
const dotVariants = {
  initial: (index) => ({
    x: (index - (totalDots - 1) / 2) * (dotSize + 8),
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
      width: 300,
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
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{ position: 'absolute', textAlign: 'center' }}
    >
      <AnimatedXpCounter finalValue={xpGained} />
    </motion.div>
  </Box>
)

export default LessonCompletionCircle
