import React from 'react'
import { Box, useTheme } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

const ExpertiseStar = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: theme.palette.secondary.light,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 2px 4px rgba(202, 21, 21, 0.5)',
        transform: 'translateX(50%)'
      }}
    >
      <StarIcon
        sx={{
          color: theme.palette.secondary.main,
          fontSize: '20px'
        }}
      />
    </Box>
  )
}

export default ExpertiseStar
