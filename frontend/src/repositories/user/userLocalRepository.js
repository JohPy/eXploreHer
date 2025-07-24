const STORAGE_KEY = 'user'
const defaultUser = {
  experience: 0,
  stars: 0,
  progress: { chapter: 1, lesson: 1 }
}

const userLocalRepository = {
  getUser() {
    try {
      const user = localStorage.getItem(STORAGE_KEY)
      return user ? JSON.parse(user) : defaultUser
    } catch {
      return defaultUser
    }
  },

  saveUser(user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  },

  getUserStats() {
    const { experience, stars, progress } = this.getUser()
    return { experience, stars, progress }
  },

  completeLesson({ experienceGained, starsGained, chapter, lesson }) {
    const currentUser = this.getUser()

    const updatedUser = {
      ...currentUser,
      experience: (currentUser.experience || 0) + experienceGained,
      stars: (currentUser.stars || 0) + starsGained,
      progress: { chapter, lesson }
    }

    this.saveUser(updatedUser)

    const { experience, stars, progress } = updatedUser
    return { experience, stars, progress }
  }
}

export default userLocalRepository
