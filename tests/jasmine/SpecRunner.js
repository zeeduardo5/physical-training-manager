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

  specs.push('spec/models/TodoSpec');
 /* specs.push('spec/views/ClearCompletedSpec');
  specs.push('spec/views/CountViewSpec');
  specs.push('spec/views/FooterViewSpec');
  specs.push('spec/views/MarkAllSpec');
  specs.push('spec/views/NewTaskSpec');
  specs.push('spec/views/TaskListSpec');
  specs.push('spec/views/task/TaskViewSpec');
  specs.push('spec/views/task/ViewTaskViewSpec');
  specs.push('spec/views/task/EditTaskViewSpec');
*/

  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});
