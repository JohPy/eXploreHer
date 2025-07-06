import React from 'react'
import { Container, Stack } from '@mui/material'

import CycleCalendar from './Images/CycleCalendar'

const DragAndDrop = () => (

  <Container
    maxWidth="xs"
    disableGutters
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
  >
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      marginBottom={2}
    >
      <CycleCalendar />
    </Stack>
  </Container>

)

export default DragAndDrop
