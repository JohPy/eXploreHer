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
        sx={{ flex: 1, overflow: 'hidden', display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', pt: 7, width: '65%', maxWidth: 320, minWidth: 200 }}
      >

        <LessonCircle
          segments={[
            { id: '1', disabled: false },
            { id: '2', disabled: true },
            { id: '3', disabled: true },
            { id: '4', disabled: true },
            { id: '5', disabled: true }
          ]}
        />

      </Box>

      {/* progress steppers */}
      <Stack sx={{ width: '100%', maxWidth: 320, p: 2, marginBottom: 2 }} spacing={2}>
        <ProgressStepper
          label="Beende dieses Kapitel"
          currentValue={20}
          maxValue={100}
          barColor={theme.palette.primary.light}
          progressColor={theme.palette.primary.main}
          EndIcon={<XpBubble />}
        />
        <ProgressStepper
          label="Zeig dein Fachwissen"
          currentValue={3}
          maxValue={40}
          barColor={theme.palette.secondary.light}
          progressColor={theme.palette.secondary.main}
          EndIcon={<ExpertiseStar />}
        />
      </Stack>
    </Stack>
  )
}

export default LessonOverview
