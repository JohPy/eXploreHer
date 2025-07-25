"use strict";

/**
 * chapter router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::chapter.chapter", {
  config: {
    find: {
      middlewares: ["api::chapter.chapter-populate"],
    },
    findOne: {
      middlewares: ["api::chapter.chapter-populate"],
    },
  },
});
