import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import DragAndDrop from '../DragAndDrop/DragAndDrop'
import Explanation from '../Explanation/Explanation'

const Exercise = ({ exercise, onComplete }) => {
  // If the exercise type is 'explanation', immediatly communicate back to parent that the exercise is complete
  useEffect(() => {
    if (exercise.type === 'explanation') {
      onComplete(null)
    }
  }, [exercise.type, onComplete])

  // Load the component depending on the exercise type
  switch (exercise.type) {
    case 'drag-and-drop':
      return <DragAndDrop fields={exercise.fields} ImageComponent={exercise.ImageComponent} onCorrectChange={onComplete} />
    case 'explanation':
      return <Explanation text={exercise.text} />
    default:
      return <div> Unbekannter Übungstyp </div>
  }
}

Exercise.propTypes = {
  exercise: PropTypes.object.isRequired,
  onComplete: PropTypes.any.isRequired
}

export default Exercise
