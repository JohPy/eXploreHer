import React from 'react'

import { Stack, Box } from '@mui/material'

import ChapterHeader from '../Components/ChapterHeader'
import LectionCircle from '../Components/LectionCircle'
import SmallBubble from '../Components/SmallBubble'

const Home = () => (

  <Stack sx={{ height: '100%', alignItems: 'center' }}>
    <Box sx={{ height: 120 }}>

      <ChapterHeader />

    </Box>
    <Box
      sx={{ flex: 1, overflow: 'auto', display: 'flex', position: 'relative', justifyContent: 'center', p: 5, width: '100%', maxWidth: 380, minWidth: 280 }}
    >

      <SmallBubble x={299} y={255} show />
      <LectionCircle
        segments={[
          { id: 'A', disabled: false, onClick: () => console.log('A') },
          { id: 'B', disabled: true, onClick: () => console.log('B') },
          { id: 'C', disabled: true, onClick: () => console.log('C') },
          { id: 'D', disabled: true, onClick: () => console.log('D') },
          { id: 'E', disabled: true, onClick: () => console.log('E') }
        ]}
      />

    </Box>
  </Stack>

)

export default Home
