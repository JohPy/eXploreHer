import React from 'react'
import PropTypes from 'prop-types'
import { useDraggable } from '@dnd-kit/core'
import { Paper, Typography } from '@mui/material'

const DraggableCard = ({ id, label }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    padding: '12px 16px',
    marginBottom: '10px',
    backgroundColor: '#f5f5f5',
    cursor: 'grab'
  }

  return (
    <Paper
      ref={setNodeRef}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...listeners}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...attributes}
      elevation={3}
      style={style}
    >
      <Typography>{label}</Typography>
    </Paper>
  )
}

DraggableCard.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
}

export default DraggableCard
