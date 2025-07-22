import React from 'react'
import { motion } from 'framer-motion'
import StarIcon from '@mui/icons-material/Star'

// single star animation
const starVariants = {
  initial: {
    y: 50,
    scale: 0,
    opacity: 0,
    rotate: Math.random() * 60 - 30
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      y: { type: 'spring', stiffness: 300, damping: 15 },
      duration: 0.5
    }
  }
}

const Star = () => (
  <motion.div variants={starVariants}>
    <StarIcon sx={{ fontSize: { xs: '2.5rem', sm: '3rem' }, color: '#ffc700' }} />
  </motion.div>
)

export default Star
