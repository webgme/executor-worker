/*jshint node: true*/
/**
 * @author pmeijer / https://github.com/pmeijer
 */

'use strict';

var config = require('./config.default'),
    validateConfig = require('webgme/config/validator');

config.server.port = 9001;
config.mongo.uri = 'mongodb://127.0.0.1:27017/executor_worker_tests';
config.blob.fsDir = './test-tmp/blob-storage';

config.executor.workerRefreshInterval = 100;
config.executor.clearOldDataAtStartUp = true;

validateConfig(config);
module.exports = config;