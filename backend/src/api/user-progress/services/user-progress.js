module.exports = {
  async updateProgress(userId, chapter, lesson, experienceGained, starsGained) {
    const userData = await strapi.db
      .query("plugin::users-permissions.user")
      .findOne({
        where: { id: userId },
        select: ["experience", "stars", "progress"],
      });

    await strapi.db.query("plugin::users-permissions.user").update({
      where: { id: userId },
      data: {
        progress: { chapter, lesson },
        experience: (userData.experience || 0) + experienceGained,
        stars: (userData.stars || 0) + starsGained,
      },
    });
  },

  async getProgress(userId) {
    const userData = await strapi.db
      .query("plugin::users-permissions.user")
      .findOne({
        where: { id: userId },
        select: ["experience", "stars", "progress"],
      });

    return {
      experience: userData.experience || 0,
      stars: userData.stars || 0,
      progress: userData.progress || { chapter: 0, lesson: 0 },
    };
  },
};
