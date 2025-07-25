const yup = require("yup");

const schema = yup
  .object({
    chapter: yup.number().integer().min(0).required(),
    lesson: yup.number().integer().min(0).required(),
    experienceGained: yup.number().integer().min(0).required(),
    starsGained: yup.number().integer().min(0).required(),
  })
  .noUnknown(true);

module.exports = {
  async completeLesson(ctx) {
    try {
      const validatedReqBody = await schema.validate(ctx.request.body, {
        stripUnknown: true,
      });
      const { chapter, lesson, experienceGained, starsGained } =
        validatedReqBody;

      const user = ctx.state.user;

      await strapi
        .service("api::user-progress.user-progress")
        .updateProgress(
          user.id,
          chapter,
          lesson,
          experienceGained,
          starsGained
        );

      const updated = await strapi
        .service("api::user-progress.user-progress")
        .getProgress(user.id);
      return updated;
    } catch (error) {
      return ctx.badRequest("Validation error", { error: error.errors });
    }
  },

  async getProgress(ctx) {
    const user = ctx.state.user;
    const progress = await strapi
      .service("api::user-progress.user-progress")
      .getProgress(user.id);
    return progress;
  },
};
