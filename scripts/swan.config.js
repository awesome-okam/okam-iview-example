/**
 * @file Build swan smart program build config
 * @author xxx
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    wx2swan: true,
    rules: []
});
