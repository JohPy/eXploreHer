import PropTypes from 'prop-types'
import * as React from 'react'

import DragAndDrop from '../DragAndDrop/DragAndDrop'

const Exercise = ({ exercise, onCorrectChange }) => {
  switch (exercise.type) {
    case 'drag-and-drop':
      return <DragAndDrop fields={exercise.fields} ImageComponent={exercise.ImageComponent} onCorrectChange={onCorrectChange} />
    default:
      return <div> Test </div>
  }
}

Exercise.propTypes = {
  exercise: PropTypes.object.isRequired,
  onCorrectChange: PropTypes.any.isRequired
}

export default Exercise
