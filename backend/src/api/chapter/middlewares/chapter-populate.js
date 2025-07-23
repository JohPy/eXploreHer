"use strict";

/**
 * `chapter-populate` middleware
 */

module.exports = (config, { strapi }) => {
  const populate = {
    lessons: {
      populate: {
        Exercises: {
          on: {
            "exercises.multiple-choice": {
              populate: {
                Answers: true,
              },
            },
            "exercises.drag-and-drop": {
              populate: {
                Image: {
                  fields: ["url", "alternativeText"],
                },
                Dropfields: true,
              },
            },
            "exercises.text-drag-and-drop": true,
            "exercises.short-answer": true,
            "exercises.match-pairs": {
              populate: {
                Pairs: true,
              },
            },
            "exercises.fill-in-the-blank": true,
          },
        },
      },
    },
  };

  return async (ctx, next) => {
    ctx.query.populate = populate;
    await next();
  };
};
