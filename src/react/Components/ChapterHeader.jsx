import React from 'react'
import { Box, Grid2, Typography } from '@mui/material'
import BookIcon from './Icons/BookIcon.jsx'

const ChapterHeader = () => (

  <Box
    sx={{
      backgroundColor: '#AC2C5F',
      width: '100%',
      color: 'white',
      borderRadius: '16px',
      px: 2.2,
      py: 1.2,
      boxShadow: 1,
      mt: 4,
    }}
  >
    <Grid2 container alignItems="center" justifyContent="space-between" columnSpacing={2}>
      <Grid2 sx={{ pb: 1.9 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <Typography
            variant="subtitle2"
            sx={{
              textTransform: 'uppercase',
              opacity: 0.6,
              fontSize: '1.2rem',
            }}
          >
            Kapitel 1
          </Typography>
          <Typography variant="h5">Der Menstruationszyklus</Typography>
        </Box>
      </Grid2>
      <Grid2 sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
        <BookIcon width={30} height={30} />
      </Grid2>
    </Grid2>
  </Box>
)

export default ChapterHeader
