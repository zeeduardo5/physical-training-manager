window.PhysicalManager = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var trainings = new PhysicalManager.Collections.TrainingCollection(data.trainings),
        router = new PhysicalManager.Router();

    router.on('route:home', function() {
      router.navigate('trainings', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showTrainings', function() {
      var trainingsView = new PhysicalManager.Views.Trainings({
        collection: trainings
      });

      $('.main-container').html(trainingsView.render().$el);
    });

    router.on('route:newTraining', function() {
      var newTrainingForm = new PhysicalManager.Views.TrainingForm({
        model: new PhysicalManager.Models.Training()
      });

      newTrainingForm.on('form:submitted', function(attrs) {
        attrs.id = trainings.isEmpty() ? 1 : (_.max(trainings.pluck('id')) + 1);
        trainings.add(attrs);
        router.navigate('trainings', true);
      });

      $('.main-container').html(newTrainingForm.render().$el);
    });

    router.on('route:editTraining', function(id) {
      var training = trainings.get(id),
          editTrainingForm;

      if (training) {
        editTrainingForm = new PhysicalManager.Views.TrainingForm({
            model: training
        });

        editTrainingForm.on('form:submitted', function(attrs) {
          training.set(attrs);
          router.navigate('trainings', true);
        });

        $('.main-container').html(editTrainingForm.render().$el);
      } else {
        router.navigate('trainings', true);
      }
    });

    Backbone.history.start();
  }
};