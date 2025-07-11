import React from 'react'
import PropTypes from 'prop-types'
import { useDraggable } from '@dnd-kit/core'
import { Box, Typography } from '@mui/material'

const DraggableCard = ({ id, label }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })

  const style = {
    borderRadius: '6px',
    backgroundColor: 'white',
    border: '2px solid #C4C4DF',
    padding: '8px 16px',
    cursor: 'grab',
    width: 150,
    textAlign: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined
  }

  return (
    <Box
      ref={setNodeRef}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...listeners}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...attributes}
      style={style}
    >
      <Typography variant="body2" fontWeight="bold">
        {label}
      </Typography>
    </Box>
  )
}

DraggableCard.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
}

export default DraggableCard
