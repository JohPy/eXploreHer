import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container, Box, Stack } from '@mui/material'
import { DndContext } from '@dnd-kit/core'

import DraggableCard from './DraggableCard'
import DropField from './DropField'

const DragAndDrop = ({ fields, ImageComponent, onCorrectChange }) => {

  const [correct, setCorrect] = useState(null)

  {/* Report back to the parent wether the assignments are correct */}
  useEffect(() => {
    onCorrectChange(correct);
  }, [correct, onCorrectChange]);

  const emptyAssignments = {};
  fields.forEach((item) => {
    emptyAssignments[item.id] = null;
  });

  {/* Set the initial state for the dropableIds as null */}
  const [assignments, setAssignments] = useState(emptyAssignments);

  {/* Is called when a drag operation has been completed */}
  const handleDragEnd = (event) => {
    const { over, active } = event

    {/* If draggable ('active') operation ended above a drop destination ('over'), do stuff */}
    {/* Example of assignments after drop event: 'const assignments = { follikel: 'luteal',   luteal: 'follikel' } */}
    if (over) {
      setAssignments((prev) => {
      const newAssignments = {
        ...prev,
        [over.id]: active.id
      }

      {/* Check is all 'over' IDs are assigned */}
      const allAssigned = Object.values(newAssignments).every((val) => val !== null);

      if (allAssigned) {

        {/* Check if all assignments are correct */}
        let allCorrect = true;
        for (const [dropId, dragId] of Object.entries(newAssignments)) {
          if (dropId !== dragId) {
            console.log(`Wrongly assigned: ${dropId} → ${dragId}`);
            allCorrect = false;
          }
        }
        setCorrect(allCorrect);
      }
      return newAssignments
    })
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Container sx={{ mt: 4, mb: 2 }}>

        <Box
          sx={{
            position: 'relative',
            mb: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Load image background as component */}
          <ImageComponent sx={{ mt: 4, height: '70%', width: 'auto' }} />

          {/* Create a DropField for each item */}
          {/* Dynamically refresh DraggableCard assignment */}
          {fields.map((field) => (
            <DropField
              key={field.id}
              id={field.id}
              position={field.position}
              assigned={fields.find(i => i.id === assignments[field.id])}
              correct={correct}
            />
          ))}
        </Box>

        {/* Display the draggable cards at the bottom of the screen */}
        <Stack direction="row" spacing={2} justifyContent="center">
          {fields.map((field) => (
            !Object.values(assignments).includes(field.id) && (
            <DraggableCard key={field.id} id={field.id} label={field.label} />
            )
          ))}
        </Stack>
      </Container>
    </DndContext>
  )
}

DragAndDrop.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      position: PropTypes.any
    }).isRequired
  )
}

export default DragAndDrop
