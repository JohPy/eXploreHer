import React from 'react'
import PropTypes from 'prop-types'
import { useDraggable } from '@dnd-kit/core'
import { Box, Typography } from '@mui/material'

const DraggableCard = ({ id, label }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })

  // If transform object exists move card into the given direction
  const style = {
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
      sx={{
        borderRadius: '6px',
        backgroundColor: 'white',
        border: (theme) => `2px solid ${theme.palette.berryGrey.main}`,
        padding: '8px 16px',
        cursor: 'grab',
        height: '15%',
        maxHeight: 40,
        width: '45%',
        maxWidth: 150,
        textAlign: 'center',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)'
      }}
      style={style}
    >
      <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' } }}>
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
