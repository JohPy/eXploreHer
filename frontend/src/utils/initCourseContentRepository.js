import courseContentApiRepository from '../repositories/course/courseContentApiRepository'
import courseContentLocalRepository from '../repositories/course/courseContentLocalRepository'

const fallbackRepository = courseContentLocalRepository

// try fetch courses, fallback to local repository if failure
const tryFetchCourses = async () => {
  try {
    await courseContentApiRepository.getAllChapters()
    return courseContentApiRepository
  } catch (err) {
    console.warn('getAllChapters failed → fallback to local')
    return fallbackRepository
  }
}

const initCourseContentRepository = async () => tryFetchCourses()

export default initCourseContentRepository
