import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import useUserRepository from '../../repositories/user/useUserRepository'
import { defaultUser } from '../../utils/defaults'
import initUserRepository from '../../utils/initUserRepository'
import userApiRepository from '../../repositories/user/userApiRepository'

const UserContext = createContext({
  user: defaultUser,
  loading: false,
  errorUser: {},
  errorStats: {},
  errorCompleteLesson: {},
  loadUser: () => {},
  loginUser: () => {},
  registerUser: () => {},
  logoutUser: () => {},
  loadUserStats: () => {},
  updateUser: () => {},
  completeLesson: () => {}
})

const UserProvider = ({ children }) => {
  const [userRepository, setUserRepository] = useState(userApiRepository)
  useEffect(() => {
    const init = async () => {
      const userRepo = await initUserRepository()
      setUserRepository(() => userRepo)
    }
    init()
  }, [])

  const {
    user,
    loading,
    errorUser,
    errorStats,
    errorCompleteLesson,
    loadUser,
    loginUser,
    registerUser,
    logoutUser,
    loadUserStats,
    updateUser,
    completeLesson
  } = useUserRepository(userRepository)

  const value = useMemo(() => ({
    user,
    loading,
    errorUser,
    errorStats,
    errorCompleteLesson,
    loadUser,
    loginUser,
    registerUser,
    logoutUser,
    loadUserStats,
    updateUser,
    completeLesson
  }), [user, loading, errorUser, errorStats, errorCompleteLesson,
    loadUser, loginUser, registerUser, logoutUser, loadUserStats, updateUser, completeLesson])

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
