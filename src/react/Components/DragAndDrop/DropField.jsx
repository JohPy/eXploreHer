import React from 'react'
import PropTypes from 'prop-types'
import { useDroppable } from '@dnd-kit/core'
import { Paper, Typography } from '@mui/material'

const DropField = ({ id, assigned, position, correct }) => {
  const { setNodeRef, isOver } = useDroppable({ id })

  // Update styling based on state
  const activeStyle = assigned ? { backgroundColor: '#fff' } : {}
  const hoverStyle = isOver ? { opacity: 0.9, boxShadow: '0 0 0 2px rgba(0,0,0,0.2)' } : {}
  let answerStyle = {}

  switch (correct) {
    case true:
      answerStyle = {
        border: (theme) => `2px solid ${theme.palette.correct.main}`,
        color: (theme) => theme.palette.correct.main
      }
      break
    case false:
      answerStyle = {
        border: (theme) => `2px solid ${theme.palette.wrong.main}`,
        color: (theme) => theme.palette.wrong.main
      }
      break
    default:
      answerStyle = {}
  }

  return (
    <Paper
      ref={setNodeRef}
      elevation={2}
      sx={{
        height: 40,
        width: 150,
        position: 'absolute',
        border: (theme) => `2px solid ${theme.palette.berryGrey.main}`,
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        backgroundColor: 'berryGrey.light',
        ...position,
        ...activeStyle,
        ...hoverStyle,
        ...answerStyle

      }}
    >
      <Typography variant="body2" fontWeight="bold">
        {/* Show label of assigned card if available otherwise " " */}
        { assigned?.label || ' ' }
      </Typography>
    </Paper>
  )
}

DropField.propTypes = {
  id: PropTypes.string,
  assigned: PropTypes.any,
  position: PropTypes.any.isRequired,
  correct: PropTypes.bool
}

export default DropField
