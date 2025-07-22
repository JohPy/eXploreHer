import React from 'react'
import { Stack, Box, useTheme } from '@mui/material'

import ChapterHeader from '../Components/LessonOverview/ChapterHeader'
import LessonCircle from '../Components/LessonOverview/LessonCircle'
import ProgressStepper from '../Components/LessonOverview/ProgressStepper'
import XpBubble from '../Components/LessonOverview/XpBubble'
import ExpertiseStar from '../Components/LessonOverview/ExpertiseStar'

const LessonOverview = () => {
  const theme = useTheme()

  return (
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

      {/* progress steppers */}
      <Stack sx={{ width: '100%', maxWidth: 320, p: 2, marginBottom: 2 }} spacing={2}>
        <ProgressStepper
          label="Finish this chapter"
          currentValue={20}
          maxValue={100}
          barColor={theme.palette.primary.main}
          progressColor={theme.palette.primary.disabled}
          EndIcon={<XpBubble />}
        />
        <ProgressStepper
          label="Show your expertise"
          currentValue={3}
          maxValue={40}
          barColor={theme.palette.secondary.main}
          progressColor={theme.palette.secondary.light}
          EndIcon={<ExpertiseStar />}
        />
      </Stack>
    </Stack>
  )
}

export default LessonOverview
