import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import StarIcon from '@mui/icons-material/Star'

const Star = ({ size, rotation, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0, rotate: rotation }}
    transition={{
      type: 'spring',
      damping: 12,
      stiffness: 150,
      delay
    }}
  >
    <StarIcon
      sx={{
        fontSize: `${size}px`,
        color: '#FFC700',
        filter: 'drop-shadow(0px 2px 3px rgba(185, 90, 0, 0.3))'
      }}
    />
  </motion.div>
)

Star.propTypes = {
  size: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired
}

export default Star
