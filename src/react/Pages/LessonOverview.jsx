import React, { useState } from 'react'
import { Stack, Box } from '@mui/material'

import ChapterHeader from '../Components/ChapterHeader'
import LessonCircle from '../Components/LessonCircle'
import StartIndicatorBubble from '../Components/StartIndicatorBubble'
import LessonStartBubble from '../Components/LessonStartBubble'

const LessonOverview = () => {
  const [showStartIndicatorBubble, setShowStartIndicatorBubble] = useState(true)
  const [showLessonStartBubble, setShowLessonStartBubble] = useState(false)

  const handleSegmentClick = ({ segmentID = '1' }) => {
    setShowStartIndicatorBubble(false)
    setShowLessonStartBubble(true)
  }

  return (
    <Stack sx={{ height: '100%', alignItems: 'center' }}>
      <Box sx={{ height: 120 }}>

        <ChapterHeader />

      </Box>
      <Box
        sx={{ flex: 1, overflow: 'auto', display: 'flex', position: 'relative', justifyContent: 'center', p: 5, width: '100%', maxWidth: 380, minWidth: 280 }}
      >

        <StartIndicatorBubble x={190} y={100} show={showStartIndicatorBubble} />
        <LessonStartBubble y={160} show={showLessonStartBubble} lessonNum={1} lessonCount={5} />
        <LessonCircle
          segments={[
            { id: '1', disabled: false, onClick: () => handleSegmentClick({ segmentID: '1' }) },
            { id: '2', disabled: true, onClick: () => console.log('2') },
            { id: '3', disabled: true, onClick: () => console.log('3') },
            { id: '4', disabled: true, onClick: () => console.log('4') },
            { id: '5', disabled: true, onClick: () => console.log('5') }
          ]}
        />

      </Box>
    </Stack>

  )
}

export default LessonOverview
