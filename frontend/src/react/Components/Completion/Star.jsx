import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import StarIcon from '@mui/icons-material/Star'

const Star = ({ top, left, size, rotation, delay }) => (
  <motion.div
    style={{
      position: 'absolute',
      top,
      left
    }}
    initial={{ opacity: 0, scale: 0.5, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0, rotate: rotation }}
    transition={{
      type: 'spring',
      damping: 10,
      stiffness: 100,
      delay
    }}
  >
    <StarIcon
      sx={{
        fontSize: `${size}px`,
        color: '#FFC700',
        filter: 'drop-shadow(0px 3px 4px rgba(255, 241, 52, 0.3))'
      }}
    />
  </motion.div>
)

Star.propTypes = {
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired
}

export default Star
