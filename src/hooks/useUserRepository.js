import { useState, useEffect, useCallback } from "react";

const useUserRepository = (userRepository) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await userRepository.getUser();
      setUser(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const updateUser = useCallback(async (newUser) => {
    try {
      await userRepository.saveUser(newUser);
      setUser(newUser);
    } catch (err) {
      setError(err);
    }
  }, []);

  const updateScore = useCallback(
    async (points) => {
      if (!user) return;
      const updatedUser = { ...user, score: user.score + points };
      await updateUser(updatedUser);
    },
    [user, updateUser]
  );

  const updateProgress = useCallback(
    async (chapter, lesson) => {
      if (!user) return;
      const updatedUser = {
        ...user,
        progress: { chapter, lesson },
      };
      await updateUser(updatedUser);
    },
    [user, updateUser]
  );

  return {
    user,
    loading,
    error,
    loadUser,
    updateUser,
    updateScore,
    updateProgress,
  };
};

export default useUserRepository;
