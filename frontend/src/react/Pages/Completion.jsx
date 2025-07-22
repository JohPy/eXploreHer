import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Stack } from '@mui/material'
import LessonCompletionAnimation from '../Components/Completion/LessonCompletionCircle'

const Completion = () => {
  const navigate = useNavigate()

  const handleFinish = () => {
    navigate('/')
  }

  return (
    <Stack sx={{ height: '100%', alignItems: 'center' }}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <LessonCompletionAnimation />
      </Box>
      <Box sx={{ width: '100%', p: 2 }}>
        <Button
          onClick={handleFinish}
        >
          {/* place holder */}
          Abschließen
        </Button>
      </Box>
    </Stack>
  )
}

export default Completion
