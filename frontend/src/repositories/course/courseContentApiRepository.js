import {
  API_ENDPOINT_CHAPTERS,
  API_ENDPOINT_LESSONS,
  BACKEND_URL
} from '../../utils/constants'

const courseContentApiRepository = {
  async getAllChapters() {
    const res = await fetch(BACKEND_URL + API_ENDPOINT_CHAPTERS)
    if (!res.ok) {
      throw new Error('Failed to fetch chapters')
    }
    return res.json()
  },

  async getChapterById(id) {
    const res = await fetch(`${BACKEND_URL + API_ENDPOINT_CHAPTERS}/${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch chapter')
    }
    return res.json()
  },

  async getAllLessons() {
    const res = await fetch(BACKEND_URL + API_ENDPOINT_LESSONS)
    if (!res.ok) {
      throw new Error('Failed to fetch lessons')
    }
    return res.json()
  },

  async getLessonById(id) {
    const res = await fetch(`${BACKEND_URL + API_ENDPOINT_LESSONS}/${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch lesson')
    }
    return res.json()
  }
}

export default courseContentApiRepository
