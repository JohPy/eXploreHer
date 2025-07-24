const TOKEN_KEY = 'jwt'

export const getAuthToken = () => localStorage.getItem(TOKEN_KEY)

export const getAuthHeader = () => {
  const token = getAuthToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}
