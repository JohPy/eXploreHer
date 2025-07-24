import authRepository from '../repositories/auth/authApiRepository'
import userApiRepository from '../repositories/user/userAPIRepository'
import userLocalRepository from '../repositories/user/userLocalRepository'
import { defaultUserCredentials } from './defaults'

const fallbackRepository = userLocalRepository

// has Token -> try to fetch user -> if failed try to login -> if failed use local repo
const tryWithToken = async () => {
  try {
    await userApiRepository.getUser()
    return userApiRepository
  } catch (err) {
    try {
      await authRepository.login(
        defaultUserCredentials.email,
        defaultUserCredentials.password
      )
      return userApiRepository
    } catch (loginErr) {
      console.error('Login failed → fallback to local')
      return fallbackRepository
    }
  }
}

// has no Token -> try to login -> if failed try to register -> if failed use local repo
const tryWithoutToken = async () => {
  try {
    await authRepository.login(
      defaultUserCredentials.email,
      defaultUserCredentials.password
    )
    return userApiRepository
  } catch (loginErr) {
    console.warn('Login failed → try registration')
    try {
      await authRepository.register(
        defaultUserCredentials.username,
        defaultUserCredentials.email,
        defaultUserCredentials.password
      )
      return userApiRepository
    } catch (registerErr) {
      console.error('Registration failed → fallback to local')
      return fallbackRepository
    }
  }
}

const initUserRepository = async () => {
  const token = authRepository.getToken()

  return token ? tryWithToken() : tryWithoutToken()
}

export default initUserRepository
