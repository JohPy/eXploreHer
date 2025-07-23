/** @type {string} - Backend url for local development */
export const LOCAL_BACKEND_URL = 'http://localhost:1337'

/** @type {string} - The base url to the backend */
export const BACKEND_URL = process.env.BACKEND_URL || LOCAL_BACKEND_URL

/** @type {string} - The endpoint for fetching chapters */
export const API_ENDPOINT_CHAPTERS = '/api/chapters'

/** @type {string} - The endpoint for fetching lessons */
export const API_ENDPOINT_LESSONS = '/api/lessons'

/** @type {string} - The endpoint for fetching current user data */
export const API_ENDPOINT_USER = '/api/users/me'

/** @type {string} - The endpoint for fetching user stats (XP, stars, progress) */
export const API_ENDPOINT_USER_STATS = '/api/user-progress/me'

/** @type {string} - The endpoint for posting stats after lesson completion */
export const API_ENDPOINT_COMPLETE_LESSON =
  '/api/user-progress/complete-lesson'
