import { useState, useEffect, useCallback } from 'react'

const createInitialState = () => ({ data: null, loading: false, error: null })

const useCourseContentRepository = (courseContentRepository) => {
  const [chaptersState, setChaptersState] = useState(createInitialState)
  const [chapterByIdState, setChapterByIdState] = useState(createInitialState)
  const [lessonsState, setLessonsState] = useState(createInitialState)
  const [lessonByIdState, setLessonByIdState] = useState(createInitialState)

  const loadChapters = useCallback(async () => {
    setChaptersState({ data: null, loading: true, error: null })
    try {
      const chaptersData = await courseContentRepository.getAllChapters()
      setChaptersState({ data: chaptersData, loading: false, error: null })
    } catch (err) {
      setChaptersState({ data: null, loading: false, error: err })
    }
  }, [courseContentRepository])

  const loadChapterById = useCallback(
    async (id) => {
      setChapterByIdState({ data: null, loading: true, error: null })
      try {
        const chapterData = await courseContentRepository.getChapterById(id)
        setChapterByIdState({ data: chapterData, loading: false, error: null })
      } catch (err) {
        setChapterByIdState({ data: null, loading: false, error: err })
      }
    },
    [courseContentRepository]
  )

  const loadLessons = useCallback(async () => {
    setLessonsState({ data: null, loading: true, error: null })
    try {
      const lessonsData = await courseContentRepository.getAllLessons()
      setLessonsState({ data: lessonsData, loading: false, error: null })
    } catch (err) {
      setLessonsState({ data: null, loading: false, error: err })
    }
  }, [courseContentRepository])

  const loadLessonById = useCallback(
    async (id) => {
      setLessonByIdState({ data: null, loading: true, error: null })
      try {
        const lessonData = await courseContentRepository.getLessonById(id)
        setLessonByIdState({ data: lessonData, loading: false, error: null })
      } catch (err) {
        setLessonByIdState({ data: null, loading: false, error: err })
      }
    },
    [courseContentRepository]
  )

  useEffect(() => {
    loadChapters()
  }, [loadChapters])

  return {
    chapters: chaptersState,
    chapter: chapterByIdState,
    lessons: lessonsState,
    lesson: lessonByIdState,
    loadChapters,
    loadChapterById,
    loadLessons,
    loadLessonById
  }
}

export default useCourseContentRepository
