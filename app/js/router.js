PhysicalManager.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'trainings': 'showTrainings',
    'trainings/new': 'newTraining',
    'trainings/edit/:id': 'editTraining'
  }
});
