import React from 'react'
import { Stack, Box, useTheme } from '@mui/material'

import ChapterHeader from '../Components/LessonOverview/ChapterHeader'
import LessonCircle from '../Components/LessonOverview/LessonCircle'
import ProgressStepper from '../Components/LessonOverview/ProgressStepper'
import XpBubble from '../Components/LessonOverview/XpBubble'
import ExpertiseStar from '../Components/LessonOverview/ExpertiseStar'
import { useUserContext } from '../contexts/user-context'
import { useCourseContentContext } from '../contexts/course-context'

const LessonOverview = () => {
  const theme = useTheme()
  const { user } = useUserContext()
  const { currentChapter, currentChapterIndex } = useCourseContentContext()
  const chapterTitle = currentChapter?.['title']

  return (
    <Stack sx={{ height: '100%', alignItems: 'center' }}>
      <Box sx={{ height: 120 }}>
        <ChapterHeader title={chapterTitle || 'Der Menstruationszyklus'} number={currentChapterIndex + 1} />
      </Box>
      <Box
        sx={{ flex: 1, overflow: 'hidden', display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', pt: 6, width: '65%', maxWidth: 320, minWidth: 200 }}
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
          currentValue={user?.experience || 0}
          maxValue={100}
          barColor={theme.palette.primary.light}
          progressColor={theme.palette.primary.main}
          EndIcon={<XpBubble />}
        />
        <ProgressStepper
          label="Zeig dein Fachwissen"
          currentValue={user?.stars || 0}
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
