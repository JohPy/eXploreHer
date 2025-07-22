module.exports = {
  routes: [
    {
      method: "POST",
      path: "/user-progress/complete-lesson",
      handler: "user-progress.completeLesson",
      config: {},
    },
    {
      method: "GET",
      path: "/user-progress/me",
      handler: "user-progress.getProgress",
      config: {},
    },
  ],
};
