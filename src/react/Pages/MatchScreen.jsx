import React from 'react'

import WordMatchQuiz from '../Components/WordMatchQuiz'

const containerStyle = {
  padding: '32px',
  maxWidth: '600px',
  margin: '40px auto',
  boxSizing: 'border-box'
}

const MatchScreen = () => (
  <div style={containerStyle}>
    <h2>Finde die passenden Paare</h2>
    <WordMatchQuiz />
  </div>
)

export default MatchScreen
