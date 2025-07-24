import { getAuthHeader } from '../../utils/auth'
import getDefaultHeaders from '../../utils/api'
import {
  BACKEND_URL,
  API_ENDPOINT_USER,
  API_ENDPOINT_USER_STATS,
  API_ENDPOINT_COMPLETE_LESSON
} from '../../utils/constants'

const userApiRepository = {
  async getUser() {
    const res = await fetch(BACKEND_URL + API_ENDPOINT_USER, {
      headers: getAuthHeader()
    })
    if (!res.ok) {
      throw new Error('Failed to fetch user data')
    }
    return res.json()
  },

  async getUserStats() {
    const res = await fetch(BACKEND_URL + API_ENDPOINT_USER_STATS, {
      headers: await getAuthHeader()
    })
    if (!res.ok) {
      throw new Error('Failed to fetch user stats')
    }
    return res.json()
  },

  async saveUser(userData) {
    const res = await fetch(BACKEND_URL + API_ENDPOINT_USER, {
      method: 'PUT',
      headers: {
        ...getDefaultHeaders(),
        ...getAuthHeader()
      },
      body: JSON.stringify(userData)
    })

    if (!res.ok) {
      throw new Error('Failed to update user')
    }

    return res.json()
  },

  async completeLesson({ experience, stars, chapter, lesson }) {
    const res = await fetch(BACKEND_URL + API_ENDPOINT_COMPLETE_LESSON, {
      method: 'POST',
      headers: {
        ...getDefaultHeaders(),
        ...getAuthHeader()
      },
      body: JSON.stringify({
        experience,
        stars,
        chapter,
        lesson
      })
    })
    if (!res.ok) {
      throw new Error('Failed to update stats after lesson completion')
    }
    return res.json()
  }
}

export default userApiRepository
