import React, { createContext, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useUserRepository } from '../hooks/useUserRepository'

const UserContext = createContext({
  user: { score: 0, progress: { chapter: 1, lesson: 1 } },
  loading: false,
  error: {},
  loadUser: () => {},
  updateUser: () => {},
  updateScore: () => {},
  updateProgress: () => {}
})

const UserProvider = ({ children }) => {
  const {
    user,
    loading,
    error,
    loadUser,
    updateUser,
    updateScore,
    updateProgress
  } = useUserRepository()

  const value = useMemo(() => ({
    user,
    loading,
    error,
    loadUser,
    updateUser,
    updateScore,
    updateProgress
  }), [user, loading, error, loadUser, updateUser, updateScore, updateProgress])

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
