import React from 'react'
import PropTypes from 'prop-types'

const LectionCircle = ({ segments }) => {
  const r = 40
  const totalLength = 2 * Math.PI * r
  const visiblePart = 1 / segments.length
  const gap = 17
  const segmentLength = totalLength * visiblePart

  return (
    <svg
      width="270"
      height="270"
      viewBox="0 0 100 100"
    >
      {segments.map((segment, i) => {
        const startOffset = totalLength - (i * segmentLength)
        const cursorStyle = segment.disabled ? 'not-allowed' : 'pointer'
        const opacity = segment.disabled ? 0.4 : 1

        return (
          <circle
            key={segment.id ?? i}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={segment.color || '#AC2C5F'}
            strokeWidth="11"
            strokeDasharray={`${segmentLength - gap} ${totalLength - segmentLength + gap}`}
            strokeDashoffset={startOffset}
            strokeLinecap="round"
            style={{ cursor: cursorStyle, opacity }}
            role="button"
            tabIndex={segment.disabled ? -1 : 0}
            onClick={segment.disabled ? undefined : segment.onClick}
            onKeyDown={(e) => {
              if (segment.disabled) return
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                segment.onClick?.(e)
              }
            }}
          />
        )
      })}
    </svg>
  )
}

LectionCircle.propTypes = {
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
      color: PropTypes.string
    })
  ).isRequired
}

export default LectionCircle
