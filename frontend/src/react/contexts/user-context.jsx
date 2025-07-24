import React, { createContext, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import useUserRepository from '../../repositories/user/useUserRepository'
import userApiRepository from '../../repositories/user/userAPIRepository'

const UserContext = createContext({
  user: { experience: 0, stars: 0, progress: { chapter: 1, lesson: 1 } },
  loading: false,
  errorUser: {},
  errorStats: {},
  errorCompleteLesson: {},
  loadUser: () => {},
  loadUserStats: () => {},
  updateUser: () => {},
  completeLesson: () => {}
})

const UserProvider = ({ children }) => {
  const {
    user,
    loading,
    errorUser,
    errorStats,
    errorCompleteLesson,
    loadUser,
    loadUserStats,
    updateUser,
    completeLesson
  } = useUserRepository(userApiRepository)

  const value = useMemo(() => ({
    user,
    loading,
    errorUser,
    errorStats,
    errorCompleteLesson,
    loadUser,
    loadUserStats,
    updateUser,
    completeLesson
  }), [user, loading, errorUser, errorStats, errorCompleteLesson, loadUser, loadUserStats, updateUser, completeLesson])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used inside <UserProvider>')
  }
  return context
}

export default UserProvider
