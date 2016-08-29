require.config({
  baseUrl: "../../app",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: '../vendor/jquery/dist/jquery',
    underscore: '../vendor/underscore/underscore',
    backbone: '../vendor/backbone/backbone',
    jasmine: '../tests/lib/jasmine',
    'jasmine-html': '../tests/lib/jasmine-html',
    spec: '../tests/jasmine/spec/'
  },
  shim: {
    
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: "_"
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});

window.store = "TestStore"; // override local storage store name - for testing

require(['underscore', 'jquery', 'jasmine-html', 'backbone'], function(_, $, jasmine){

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('spec/models/ModelSpec');
  specs.push('spec/views/trainingsSpec');
  specs.push('spec/views/trainingFormSpec');

  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});
