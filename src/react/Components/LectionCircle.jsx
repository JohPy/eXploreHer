import React, { useState } from 'react'
import PropTypes from 'prop-types'

const LectionCircle = ({ segments }) => {
  // Circle radius
  const r = 40
  // Circumference
  const totalLength = 2 * Math.PI * r
  // Define gap to avoid overlapping of the segments
  const gap = 17
  // Calculate the individual length of each segment
  const segmentLength = totalLength / segments.length

  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: 'auto' }}>
      {/* Each segment is grouped by base segment + overlay + hitbox */}
      {segments.map((segment, i) => {
        const startOffset = totalLength - i * segmentLength
        const cursorStyle = segment.disabled ? 'not-allowed' : 'pointer'
        const isHovered = hoveredIndex === i
        const isActive = activeIndex === i

        const baseDash = `${segmentLength - gap} ${totalLength - segmentLength + gap}`

        return (
          <g key={segment.id ?? i}>
            {/* Base segment */}
            <circle
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke={segment.color || '#AC2C5F'}
              strokeWidth="11"
              strokeDasharray={baseDash}
              strokeDashoffset={startOffset}
              strokeLinecap="round"
              style={{
                cursor: cursorStyle,
                opacity: segment.disabled ? 0.4 : 1,
                transition: 'stroke 0.2s ease, opacity 0.2s ease',
              }}
            />

            {/* Overlay for hover/active effect */}
            {!segment.disabled && (isHovered || isActive) && (
              <circle
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke={isActive ? '#000000' : '#666666'}
                strokeWidth="10"
                strokeDasharray={baseDash}
                strokeDashoffset={startOffset}
                strokeLinecap="round"
                style={{
                  pointerEvents: 'none',
                  opacity: 0.3,
                }}
              />
            )}

            {/* Invisible hitbox for each segment */}
            {!segment.disabled && (
              <circle
                cx="50"
                cy="50"
                r={r + 5} // Increase clickable area
                fill="transparent"
                stroke="transparent"
                strokeWidth="20"
                strokeDasharray={baseDash}
                strokeDashoffset={startOffset}
                strokeLinecap="round"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => {
                  setHoveredIndex(null)
                  setActiveIndex(null)
                }}
                onMouseDown={() => setActiveIndex(i)}
                onMouseUp={() => setActiveIndex(null)}
                onClick={segment.onClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    segment.onClick?.(e)
                  }
                }}
                role="button"
                tabIndex={0}
              />
            )}
          </g>
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
