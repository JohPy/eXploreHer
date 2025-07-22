import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'

const XpBubble = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.light,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 2px 4px rgba(202, 21, 21, 0.5)',
        transform: 'translateX(50%)'
      }}
    >
      <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 'bold', lineHeight: 1 }}>
        XP
      </Typography>
    </Box>
  )
}

export default XpBubble
