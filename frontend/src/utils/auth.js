import authApiRepository from '../repositories/auth/authApiRepository'

const getAuthHeader = () => {
  const token = authApiRepository.getToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export default getAuthHeader
