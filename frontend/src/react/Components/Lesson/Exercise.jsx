import PropTypes from 'prop-types'
import * as React from 'react'

import DragAndDrop from '../DragAndDrop/DragAndDrop'
import WordMatchQuiz from '../WordMatchQuiz'

const Exercise = ({ exercise, onCorrectChange }) => {
  switch (exercise.type) {
    case 'drag-and-drop':
      return <DragAndDrop fields={exercise.fields} ImageComponent={exercise.ImageComponent} onCorrectChange={onCorrectChange} />
    case 'word-match-quiz':
      return <WordMatchQuiz questions={exercise.questions} onCorrectChange={onCorrectChange} />
    default:
      return <div> Test </div>
  }
}

Exercise.propTypes = {
  exercise: PropTypes.object.isRequired,
  onCorrectChange: PropTypes.any.isRequired
}

export default Exercise
