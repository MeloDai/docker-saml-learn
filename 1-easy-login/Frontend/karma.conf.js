module.exports = function (config) {
  config.set({
    frameworks: ['browserify','jasmine'],
    preprocessors: {
      'test/**/*.js': ['browserify']
    },
    reporters: ['spec'],
    browsers: ['Chrome'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/make/js/setting.js',
      'test/**/*.test.js'
    ],
    browserify: {
      debug: true,
      transform: [
        ['babelify']
      ],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.external('react/addons');
          bundle.external('react/lib/ReactContext');
          bundle.external('react/lib/ExecutionEnvironment');
        });
      }
    },
    client: {
      captureConsole: false
    },
    singleRun: true
  });
};