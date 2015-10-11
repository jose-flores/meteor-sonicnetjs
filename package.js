Package.describe({
  name: 'joseflores:sonicnetjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This package is a port of the sonicnetjs from https://github.com/borismus/sonicnet.js. So all credits to Boris Smus (https://github.com/borismus)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jose-flores/meteor-sonicnetjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles(['sonic-coder.js','ring-buffer.js','sonic-socket.js','sonic-server.js'],'client');
  if (api.export){
    api.export('SonicCoder');
    api.export('RingBuffer');
    api.export('SonicServer');
    api.export('SonicSocket');
  }
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('joseflores:sonicnetjs');
  api.addFiles('sonicnetjs-tests.js');
});
