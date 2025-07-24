import { useState, useEffect, useCallback } from 'react'
import authApiRepository from '../auth/authApiRepository'

const useUserRepository = (userRepository) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  const [errorUser, setErrorUser] = useState(null)
  const [errorStats, setErrorStats] = useState(null)
  const [errorCompleteLesson, setErrorCompleteLesson] = useState(null)

  const loadUser = useCallback(async () => {
    setLoading(true)
    setErrorUser(null)
    try {
      const userData = await userRepository.getUser()
      setUser(userData)
    } catch (err) {
      setErrorUser(err)
    } finally {
      setLoading(false)
    }
  }, [userRepository])

  const loginUser = useCallback(
    async (identifier, password) => {
      setLoading(true)
      try {
        const loggedInUser = await authApiRepository.login(
          identifier,
          password
        )
        setUser(loggedInUser)
      } catch (err) {
        setErrorUser(err)
      } finally {
        setLoading(false)
      }
    },
    [authApiRepository]
  )

  const registerUser = useCallback(
    async (username, email, password) => {
      setLoading(true)
      try {
        const registeredUser = await authApiRepository.register(
          username,
          email,
          password
        )
        setUser(registeredUser)
      } catch (err) {
        setErrorUser(err)
      } finally {
        setLoading(false)
      }
    },
    [authApiRepository]
  )

  const logoutUser = useCallback(() => {
    authApiRepository.logout()
    setUser(null)
  }, [authApiRepository])

  const loadUserStats = useCallback(async () => {
    setLoading(true)
    setErrorStats(null)
    try {
      const userStats = await userRepository.getUserStats()
      setUser((prevUser) => ({ ...prevUser, ...userStats }))
    } catch (err) {
      setErrorStats(err)
    } finally {
      setLoading(false)
    }
  }, [userRepository])

  useEffect(() => {
    loadUser()
  }, [loadUser])

  const updateUser = useCallback(
    async (newUser) => {
      try {
        await userRepository.saveUser(newUser)
        setUser(() => newUser)
      } catch (err) {
        setErrorUser(err)
      }
    },
    [userRepository]
  )

  const updateExperience = useCallback(
    async (amount) => {
      if (!user) return
      const updatedUser = { ...user, experience: amount }
      await updateUser(updatedUser)
    },
    [user, updateUser]
  )

  const updateStars = useCallback(
    async (amount) => {
      if (!user) return
      const updatedUser = { ...user, stars: amount }
      await updateUser(updatedUser)
    },
    [user, updateUser]
  )

  const updateProgress = useCallback(
    async (chapter, lesson) => {
      if (!user) return
      const updatedUser = {
        ...user,
        progress: { chapter, lesson }
      }
      await updateUser(updatedUser)
    },
    [user, updateUser]
  )

  const completeLesson = useCallback(
    async ({ experience, stars, chapter, lesson }) => {
      setErrorCompleteLesson(null)
      try {
        const newUserStats = await userRepository.completeLesson({
          experience,
          stars,
          chapter,
          lesson
        })
        setUser((prevUser) => ({ ...prevUser, ...newUserStats }))
      } catch (err) {
        setErrorCompleteLesson(err)
      }
    },
    [userRepository]
  )

  return {
    user,
    loading,
    errorUser,
    errorStats,
    errorCompleteLesson,
    loginUser,
    registerUser,
    logoutUser,
    loadUser,
    loadUserStats,
    updateUser,
    updateExperience,
    updateStars,
    updateProgress,
    completeLesson
  }
}

export default useUserRepository
