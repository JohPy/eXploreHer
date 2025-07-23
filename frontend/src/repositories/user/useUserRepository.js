import { useState, useEffect, useCallback } from 'react'

const useUserRepository = (userRepository) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
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
