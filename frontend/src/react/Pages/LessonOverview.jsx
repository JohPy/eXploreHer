import React from 'react'
import { Stack, Box } from '@mui/material'

import ChapterHeader from '../Components/LessonOverview/ChapterHeader'
import LessonCircle from '../Components/LessonOverview/LessonCircle'

const LessonOverview = () => (
  <Stack sx={{ height: '100%', alignItems: 'center' }}>
    <Box sx={{ height: 120 }}>

      <ChapterHeader />

    </Box>
    <Box
      sx={{ flex: 1, overflow: 'auto', display: 'flex', position: 'relative', justifyContent: 'center', p: 5, width: '100%', maxWidth: 380, minWidth: 280 }}
    >

      <LessonCircle
        segments={[
          { id: '1', disabled: false, onClick: () => console.log('1') },
          { id: '2', disabled: true, onClick: () => console.log('2') },
          { id: '3', disabled: true, onClick: () => console.log('3') },
          { id: '4', disabled: true, onClick: () => console.log('4') },
          { id: '5', disabled: true, onClick: () => console.log('5') }
        ]}
      />

    </Box>
  </Stack>

)

export default LessonOverview
