import React, { useState } from 'react'
import { Container, Box, Stack } from '@mui/material'
import { DndContext } from '@dnd-kit/core'

import DraggableCard from './DraggableCard'
import DropField from './DropField'
import CycleCalendar from '../Images/CycleCalendar'

const DragAndDrop = () => {
  const [assignments, setAssignments] = useState({
    droppable1: null,
    droppable2: null
  })

  const handleDragEnd = (event) => {
    const { over, active } = event

    if (over) {
      setAssignments((prev) => ({
        ...prev,
        [over.id]: active.id
      }))
    }
  }

  const items = [
    { id: 'follikel', label: 'Follikelphase' },
    { id: 'luteal', label: 'Lutealphase' }
  ]

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Container sx={{ mt: 4 }}>

        <Box
          sx={{
            position: 'relative',
            mb: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CycleCalendar sx={{ mt: 4, height: '70%', width: 'auto' }} />

          <DropField
            id="droppable1"
            label=" "
            item={assignments.droppable1}
            sx={{ top: '5%', right: '2%' }}
          />
          <DropField
            id="droppable2"
            label=" "
            item={assignments.droppable2}
            sx={{ top: '88%', left: '2%' }}
          />
        </Box>

        <Stack direction="row" spacing={2} justifyContent="center">
          {items.map((item) => (
            !Object.values(assignments).includes(item.id) && (
            <DraggableCard key={item.id} id={item.id} label={item.label} />
            )
          ))}
        </Stack>
      </Container>
    </DndContext>
  )
}

export default DragAndDrop
