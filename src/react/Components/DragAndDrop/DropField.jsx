import React from 'react'
import PropTypes from 'prop-types'
import { useDroppable } from '@dnd-kit/core'
import { Paper, Typography } from '@mui/material'

const DropField = ({ id, label, item, sx = {} }) => {
  const { setNodeRef, isOver } = useDroppable({ id })

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
        ...sx
      }}
    >
      <Typography variant="body1">
        {item || label}
      </Typography>
    </Paper>
  )
}

DropField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  item: PropTypes.any,
  sx: PropTypes.any
}

export default DropField
