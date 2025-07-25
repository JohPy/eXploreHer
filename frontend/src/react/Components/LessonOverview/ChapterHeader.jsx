import React from 'react'
import PropTypes from 'prop-types'

import { Box, Grid2, Typography } from '@mui/material'
import BookIcon from '../Icons/BookIcon'

const ChapterHeader = ({ number, title }) => (
  <Box
    sx={{
      backgroundColor: 'primary.main',
      width: '100%',
      color: 'white',
      borderRadius: '16px',
      px: 2.2,
      py: 1.2,
      boxShadow: 1,
      mt: 4
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
              xs: '0.9rem',
              sm: '1rem',
              md: '1.2rem'
            }}
          >
            {`Kapitel ${number}`}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                xs: '1.5rem',
                sm: '1.8rem',
                md: '2rem'
              }
            }}
          >
            {`${title}`}
          </Typography>
        </Box>
      </Grid2>
      <Grid2 sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
        <BookIcon width={28} height={28} />
      </Grid2>
    </Grid2>
  </Box>
)

ChapterHeader.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired
}

export default ChapterHeader
