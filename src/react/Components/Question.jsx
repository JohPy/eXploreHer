import PropTypes from 'prop-types'
import * as React from 'react'

const Question = ({ question, onNext }) => {
  switch (question.type) {
    case 'multiple-choice':
      return <MultipleChoiceQuestion data={question.content} />
    case 'drag-drop':
      return <DragDropQuestion data={question.content} />
    default:
      return <div> Test </div>
  }
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onNext: PropTypes.func.isRequired
}

export default Question
