import React, { useState } from 'react'
import { Stack, Box } from '@mui/material'

import ChapterHeader from '../Components/ChapterHeader'
import LectionCircle from '../Components/LectionCircle'
import SmallBubble from '../Components/SmallBubble'
import LargeBubble from '../Components/LargeBubble'

const Home = () => {
  const [showSmallBubble, setShowSmallBubble] = useState(true)
  const [showLargeBubble, setShowLargeBubble] = useState(false)

  const handleSegmentClick = ({ segmentID = '1' }) => {
    setShowSmallBubble(false)
    setShowLargeBubble(true)
  }

  return (
    <Stack sx={{ height: '100%', alignItems: 'center' }}>
      <Box sx={{ height: 120 }}>

        <ChapterHeader />

      </Box>
      <Box
        sx={{ flex: 1, overflow: 'auto', display: 'flex', position: 'relative', justifyContent: 'center', p: 5, width: '100%', maxWidth: 380, minWidth: 280 }}
      >

        <SmallBubble x={190} y={100} show={showSmallBubble} />
        <LargeBubble y={160} show={showLargeBubble} lectionNum={1} lectionCount={5} />
        <LectionCircle
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

export default Home
