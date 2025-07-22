'use strict';

/**
 * course-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-content.course-content');
