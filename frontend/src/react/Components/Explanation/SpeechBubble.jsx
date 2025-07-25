import * as React from 'react'
import PropTypes from 'prop-types'

const SpeechBubble = ({ width = 304, height = 367 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 304 367"
    fill="none"
    preserveAspectRatio="none"
  >
    <path
      d="M1 12C1 5.925 5.925 1 12 1h280c6.075 0 11 4.925 11 11v312.162c0 6.075-4.925 11-11 11h-51.788c-.46 0-.907.159-1.264.45l-36.052 29.396c-1.96 1.598-4.896.204-4.896-2.325v-25.521a2 2 0 00-2-2H12c-6.075 0-11-4.925-11-11V12z"
      stroke="#E3E3E3"
      strokeWidth={2}
    />
  </svg>
)

SpeechBubble.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any
}

export default SpeechBubble
