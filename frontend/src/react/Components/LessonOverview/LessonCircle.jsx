import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'

import StartIndicatorBubble from './StartIndicatorBubble'
import LessonStartBubble from './LessonStartBubble'

const LessonCircle = ({ segments }) => {
  const theme = useTheme()
  const themeColor = theme.palette.primary.main

  const generalOffset = 80
  // Circle radius
  const r = 40
  // Circumference
  const totalLength = 2 * Math.PI * r
  // Define gap to avoid overlapping of the segments
  const gap = 17
  // Calculate the individual length of each segment
  const segmentLength = totalLength / segments.length

  const [hoveredIndex, setHoveredIndex] = useState()
  const [activeIndex, setActiveIndex] = useState()

  const [showStartIndicatorBubble, setShowStartIndicatorBubble] = useState(true)
  const [showLessonStartBubble, setShowLessonStartBubble] = useState(false)

  const [selectedLesson, setSelectedLesson] = useState(1)

  const handleSegmentClick = ({ segmentID }) => {
    setShowStartIndicatorBubble(false)
    setShowLessonStartBubble(true)
    setSelectedLesson(segmentID)
  }

  const [xPosition, setXPosition] = useState(0)
  const [yPosition, setYPosition] = useState(0)

  // Calculate the optimal position of the StartIndicatorBubble
  useEffect(() => {
    const lastValidIndex = [...segments]
      .map((s, i) => ({ s, i }))
      .reverse()
      .find(({ s }) => !s.disabled)?.i

    if (lastValidIndex != null) {
      const anglePerSegment = 360 / segments.length
      const angle = anglePerSegment * lastValidIndex - 90
      const radians = angle * (Math.PI / 180)

      const x = 50 + Math.cos(radians) * (r - 3)
      const y = 50 + Math.sin(radians) * (r - 3) - 5
      setXPosition(x)
      setYPosition(y)
    }
  }, [segments])

  return (
    <div style={{ position: 'relative' }}>

      <svg viewBox="0 -10 100 110" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>

        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Each segment is grouped by base segment + overlay + hitbox */}
        {segments.map((segment, i) => {
          const startOffset = totalLength - i * segmentLength
          const cursorStyle = segment.disabled ? 'not-allowed' : 'pointer'
          const isHovered = hoveredIndex === i
          const isActive = activeIndex === i

          // The baseDash consists of: 1. the length of the first line 2. the gap afterwards
          // --> Like this the circle consists of only one dash
          const baseDash = `${segmentLength - gap} ${totalLength - segmentLength + gap}`

          return (
            <g key={segment.id}>
              {/* Base segment */}
              <circle
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke={themeColor}
                strokeWidth="11"
                strokeDasharray={baseDash}
                strokeDashoffset={startOffset + generalOffset}
                strokeLinecap="round"
                filter="url(#shadow)"
                style={{
                  cursor: cursorStyle,
                  opacity: segment.disabled ? 0.4 : 1,
                  transition: 'stroke 0.2s ease, opacity 0.2s ease'
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
                strokeDashoffset={startOffset + generalOffset}
                strokeLinecap="round"
                style={{
                  pointerEvents: 'none',
                  opacity: 0.3
                }}
              />
              )}

              {/* Invisible hitbox for each segment */}
              {!segment.disabled && (
              <circle
                cx="50"
                cy="50"
                r={r} // Clickable area
                fill="transparent"
                stroke="transparent"
                strokeWidth="20"
                strokeDasharray={baseDash}
                strokeDashoffset={startOffset + generalOffset}
                strokeLinecap="round"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => {
                  setHoveredIndex(null)
                  setActiveIndex(null)
                }}
                onMouseDown={() => setActiveIndex(i)}
                onMouseUp={() => setActiveIndex(null)}
                onClick={() => handleSegmentClick(i)}
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

      <div
        style={{
          position: 'absolute',
          left: `${xPosition}%`,
          top: `${yPosition}%`,
          transform: 'translate(-50%, -100%)',
          pointerEvents: 'none',
          zIndex: 10
        }}
      >
        <StartIndicatorBubble show={showStartIndicatorBubble} />
      </div>
      <div>
        <LessonStartBubble y={100} show={showLessonStartBubble} lessonNum={selectedLesson} lessonCount={segments.length} />
      </div>
    </div>
  )
}

LessonCircle.propTypes = {
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      color: PropTypes.string
    })
  ).isRequired
}

export default LessonCircle
