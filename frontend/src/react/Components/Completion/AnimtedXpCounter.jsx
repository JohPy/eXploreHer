import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion'
import { Typography, Box } from '@mui/material'

const PopUp = () => (
  <motion.div
    initial={{ y: -50, opacity: 1, scale: 2 }}
    animate={{ y: -80, opacity: 0, scale: 5 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    style={{ position: 'absolute' }}
  >
    <Typography sx={{ fontWeight: 'bold', color: '#4B8F7A' }}>+1</Typography>
  </motion.div>
)

const AnimatedXpCounter = ({ finalValue }) => {
  const count = useMotionValue(0)
  // rounding for integers to show up, not decimal digits
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [popUps, setPopUps] = useState([])
  const previous = useRef(0)

  useEffect(() => {
    const controls = animate(count, finalValue, {
      duration: 1.5,
      delay: 0.5,
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
  }, [finalValue, count])

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
  finalValue: PropTypes.number.isRequired
}

export default AnimatedXpCounter
