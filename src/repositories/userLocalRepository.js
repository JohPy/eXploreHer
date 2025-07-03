const STORAGE_KEY = "user";
const defaultUser = { score: 0, progress: { chapter: 1, lesson: 1 } };

const userLocalRepository = {
  async getUser() {
    try {
      const user = localStorage.getItem(STORAGE_KEY);
      return user ? JSON.parse(user) : defaultUser;
    } catch {
      return defaultUser;
    }
  },

  async saveUser(user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  },
};

export default userLocalRepository;
