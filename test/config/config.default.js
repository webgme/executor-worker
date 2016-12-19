'use strict';
var config = require('webgme/config/config.default'),
    validateConfig = require('webgme/config/validator');

config.mongo.uri = 'mongodb://127.0.0.1:27017/executor_worker';

config.executor.enable = true;
config.server.port = 8888;

validateConfig(config);
module.exports = config;