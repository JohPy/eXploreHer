import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Typography, Paper, Slide } from '@mui/material'

const LessonFooter = ({ status = 'disabled', onClick, explanation, containerRef }) => {
  const showFeedback = ['correct', 'wrong'].includes(status)

  const label = status === 'complete' ? 'Abschließen' : 'Weiter'

  const getFeedbackTitle = () => {
    if (status === 'correct') return 'Richtig!'
    if (status === 'wrong') return 'Leider falsch'
    return ''
  }

  return (
    <Box>

      {/* After the user answered, show card with feedback and enabled button */}
      {showFeedback && (
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          maxWidth: '900px',
          zIndex: 10
        }}
      >
        <Slide direction="up" in={showFeedback} container={containerRef.current} mountOnEnter unmountOnExit>
          <Paper elevation={2} sx={{ p: 2, pb: 4, textAlign: 'left' }}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mx: 1 }} gutterBottom>
              {getFeedbackTitle()}
            </Typography>
            <Typography variant="body2" sx={{ mx: 1, mb: 2, fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem' } }}>
              {explanation}
            </Typography>
            <Button variant="contained" fullWidth sx={{ minHeight: 45, borderRadius: '12px' }} onClick={onClick}>
              {label}
            </Button>
          </Paper>
        </Slide>
      </Box>
      )}

      {/* In all other situations just display the normal button */}
      {!showFeedback && (
      <Box sx={{ pb: 2 }}>
        <Button variant="contained" fullWidth sx={{ minHeight: 45, borderRadius: '12px' }} disabled={status === 'disabled'} onClick={onClick}>
          {label}
        </Button>
      </Box>
      )}

    </Box>
  )
}

LessonFooter.propTypes = {
  status: PropTypes.string,
  onClick: PropTypes.func,
  explanation: PropTypes.string,
  containerRef: PropTypes.any
}

export default LessonFooter
