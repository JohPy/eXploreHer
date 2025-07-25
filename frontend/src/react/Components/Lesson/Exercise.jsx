/* eslint-disable dot-notation */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import DragAndDrop from '../DragAndDrop/DragAndDrop'
import MatchPairs from '../WordMatchQuiz/MatchPairs'
import Explanation from '../Explanation/Explanation'
import MultipleChoice from '../MultipleChoice/MultipleChoice'

const Exercise = ({ exercise, onComplete }) => {
  // If the exercise type is 'explanation', immediatly communicate back to parent that the exercise is complete
  useEffect(() => {
    if (exercise['__component'] === 'explanation') {
      onComplete(null)
    }
  }, [exercise['__component'], onComplete])
  console.log(exercise['__component'])
  // Load the component depending on the exercise type
  switch (exercise['__component']) {
    case 'exercises.drag-and-drop':
      return <DragAndDrop fields={exercise.fields} ImageComponent={exercise.ImageComponent} onCorrectChange={onComplete} />
    case 'exercises.explanation':
      return <Explanation text={exercise.text} />
    case 'exercises.match-pairs':
      return <MatchPairs pairs={exercise['Pairs']} onCorrectChange={onComplete} />
    case 'exercises.multiple-choice':
      return <MultipleChoice content={exercise['Answers']} onCorrectChange={onComplete} />
    default:
      return <div> Unbekannter Übungstyp </div>
  }
}

Exercise.propTypes = {
  exercise: PropTypes.object.isRequired,
  onComplete: PropTypes.any.isRequired
}

export default Exercise
