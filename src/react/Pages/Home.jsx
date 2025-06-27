import React from 'react'

import { Stack, Box } from '@mui/material'

import Lections from '../Components/Icons/Lections'
import LectionPath from '../Components/Icons/LectionPath'
import ChapterHeader from '../Components/ChapterHeader'
import LectionCircle from '../Components/LectionCircle'

const Home = () => (

  <Stack sx={{ height: '100%', alignItems: 'center' }}>
    <Box sx={{ height: 120 }}>

      <ChapterHeader />

    </Box>
    <Box
      sx={{ flex: 1, overflow: 'auto', display: 'flex', justifyContent: 'center', p: 10 }}
    >

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
