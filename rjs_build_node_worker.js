({
    name: 'node_worker',
    out: 'node_worker.classes.build.js',
    baseUrl: './',
    paths: {
        blob: './node_modules/webgme-engine/src/common/blob',
        common: './node_modules/webgme-engine/src/common',
        executor: './node_modules/webgme-engine/src/common/executor',
        superagent: 'empty:',
        fs: 'empty:',
        util: 'empty:',
        events: 'empty:',
        path: 'empty:',
        child_process: 'empty:', // jshint ignore:line
        minimatch: 'empty:',
        rimraf: 'empty:',
        url: 'empty:',
        q: 'empty:',
        'executor-worker': 'src'
    },
    optimize: 'none',
    include: ['./node_modules/requirejs/require'],
    wrap: {
        end: 'module.exports.require = require;\n' +
             'module.exports.requirejs = requirejs;\nmodule.exports.define = define;\n'
    }
});
