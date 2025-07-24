import {
  API_ENDPOINT_LOGIN,
  API_ENDPOINT_REGISTER,
  BACKEND_URL
} from '../../utils/constants'
import getDefaultHeaders from '../../utils/api'

const TOKEN_KEY = 'jwt'

const authApiRepository = {
  async login(identifier, password) {
    const res = await fetch(BACKEND_URL + API_ENDPOINT_LOGIN, {
      method: 'POST',
      headers: {
        ...getDefaultHeaders()
      },
      body: JSON.stringify({ identifier, password })
    })

    if (!res.ok) throw new Error('Login failed')
    const authData = await res.json()

    localStorage.setItem(TOKEN_KEY, authData.jwt)
    return authData.user
  },

  async register(username, email, password) {
    const res = await fetch(BACKEND_URL + API_ENDPOINT_REGISTER, {
      method: 'POST',
      headers: {
        ...getDefaultHeaders()
      },
      body: JSON.stringify({ username, email, password })
    })

    if (!res.ok) throw new Error('Registration failed')
    const authData = await res.json()

    localStorage.setItem(TOKEN_KEY, authData.jwt)
    return authData.user
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY)
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY)
  },

  isAuthenticated() {
    return !!localStorage.getItem(TOKEN_KEY)
  }
}

export default authApiRepository
