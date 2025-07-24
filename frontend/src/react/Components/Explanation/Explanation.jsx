import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Box, Typography } from '@mui/material'

import SpeechBubble from './SpeechBubble'

import TeachingUti from '../../../assets/teachingUti.svg'

const Explanation = ({ text }) => (
  <Stack
    flex="1 1 auto"
    direction="column"
    justifyContent="center"
    alignItems="center"
    sx={{ height: '100%', width: '100%' }}
  >
    <Box
      sx={{
        width: '80%',
        maxWidth: 400,
        height: '90%',
        maxHeight: 300,
        position: 'relative'
      }}
    >
      <SpeechBubble width="100%" height="100%" />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          p: 2.5,
          textAlign: 'left',
          overflow: 'auto'
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '0.9rem',
              sm: '1rem',
              md: '1.1rem'
            },
            textAlign: 'left'
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </Box>
    </Box>
    <Box>
      <img
        src={TeachingUti}
        alt="Uterus Mascot"
        style={{
          width: '170px',
          height: '170px',
          py: 4
        }}
      />
    </Box>
  </Stack>
)

Explanation.propTypes = {
  text: PropTypes.string
}

export default Explanation
