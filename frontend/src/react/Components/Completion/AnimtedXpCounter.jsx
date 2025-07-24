import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion'
import { Typography, Box, useTheme } from '@mui/material'

const PopUp = () => {
  const theme = useTheme()
  return (
    <motion.div
      initial={{ y: -50, opacity: 1, scale: 2 }}
      animate={{ y: -80, opacity: 0, scale: 5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{ position: 'absolute' }}
    >
      <Typography sx={{ fontWeight: 'bold', color: theme.palette.correct.main }}>+1</Typography>
    </motion.div>
  )
}

const AnimatedXpCounter = ({ startValue = 0, finalValue }) => {
  const count = useMotionValue(startValue)
  // rounding for integers to show up, not decimal digits
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [popUps, setPopUps] = useState([])
  const previous = useRef(startValue)

  useEffect(() => {
    const controls = animate(count, startValue + finalValue, {
      duration: 1.5,
      delay: 0,
      ease: 'easeOut',
      onUpdate: (latest) => { // checking if integer changed
        if (Math.floor(latest) > previous.current) {
          const newPopUp = { id: Date.now() }
          setPopUps((current) => [...current, newPopUp])
          setTimeout(() => {
            setPopUps((p) => p.filter((item) => item.id !== newPopUp.id))
          }, 700)
        }
        previous.current = Math.floor(latest)
      }
    })
    return controls.stop
  }, [startValue, finalValue, count])

  return (
    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h2" sx={{ fontWeight: 900 }}>
        <motion.span>{rounded}</motion.span>
        XP
      </Typography>
      <AnimatePresence>
        {popUps.map((popUp) => (
          <PopUp key={popUp.id} />
        ))}
      </AnimatePresence>
    </Box>
  )
}

AnimatedXpCounter.propTypes = {
  startValue: PropTypes.number,
  finalValue: PropTypes.number.isRequired
}

export default AnimatedXpCounter
