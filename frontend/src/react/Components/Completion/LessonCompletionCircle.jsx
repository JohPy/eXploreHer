import React from 'react'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import AnimatedXpCounter from './AnimtedXpCounter'

const totalDots = 8
const dotSize = 20
const circleRadius = 130
const xpGained = 20

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
    x: (index - (totalDots - 1) / 2) * dotSize,
    y: -265,
    scale: 0.5
  }),
  animate: (index) => ({
    // calculating final position with circle's circumference
    x: circleRadius * Math.cos((index / totalDots) * 2 * Math.PI - Math.PI / 2),
    y: circleRadius * Math.sin((index / totalDots) * 2 * Math.PI - Math.PI / 2),
    scale: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 120
    }
  })
}

const dots = Array.from({ length: totalDots }, (_, index) => ({
  id: `dot-${index}`
}))

const LessonCompletionCircle = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: 250,
        height: 250,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingRight: 2.5 }}>
        <motion.div
          style={{ position: 'absolute' }}
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
                backgroundColor: theme.palette.lessonStatus.correct.main,
                border: `1px solid ${theme.palette.lessonStatus.correct.border}`,
                borderRadius: '50%'
              }}
            />
          ))}
        </motion.div>
      </Box>
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
}

export default LessonCompletionCircle
