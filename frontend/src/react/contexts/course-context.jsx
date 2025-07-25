import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useCourseContentRepository from '../../repositories/course/useCourseContentRepository'
import courseContentApiRepository from '../../repositories/course/courseContentAPIRepository'
import initCourseContentRepository from '../../utils/initCourseContentRepository'
import { defaultChapters } from '../../utils/defaults'

const CourseContentContext = createContext({
  chaptersState: defaultChapters,
  currentChapterIndex: 0,
  currentChapter: {},
  loadChapters: () => {},
  setCurrentChapterIndex: () => {}
})

export const CourseContentProvider = ({ children }) => {
  const [courseContentRepository, setCourseContentRepository] = useState(courseContentApiRepository)
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0)

  useEffect(() => {
    const init = async () => {
      const courseContentRepo = await initCourseContentRepository()
      setCourseContentRepository(() => courseContentRepo)
    }
    init()
  }, [])

  const { chaptersState, loadChapters } = useCourseContentRepository(courseContentRepository)

  useEffect(() => {
    loadChapters()
  }, [])

  const currentChapter = chaptersState?.data?.data?.[currentChapterIndex] || null

  const value = useMemo(() => ({
    chaptersState,
    currentChapter,
    currentChapterIndex,
    loadChapters,
    setCurrentChapterIndex
  }), [chaptersState, currentChapter, currentChapterIndex, loadChapters, setCurrentChapterIndex])

  return (
    <CourseContentContext.Provider value={value}>
      {children}
    </CourseContentContext.Provider>
  )
}

CourseContentProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useCourseContentContext = () => {
  const context = useContext(CourseContentContext)
  if (!context) {
    throw new Error('useCourseContentContext must be used inside <CourseContentProvider>')
  }
  return context
}
