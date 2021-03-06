window.PhysicalManager = {
  Models: {},
  Collections: {},
  Views: {},

  start: function (data) {
    PhysicalManager.pubSub = _.extend({}, Backbone.Events);
    var trainings = new PhysicalManager.Collections.TrainingCollection(data.trainings),
      router = new PhysicalManager.Router();
    router.on('route:home', function () {
      router.navigate('trainings', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showTrainings', function () {
      var trainingsView = new PhysicalManager.Views.Trainings({
        collection: trainings
      });
      $('.main-container').html(trainingsView.render().$el);
      $('#totalHours').text(trainings.totalHours() + ' hours of Workout');
      newChart("myChart",trainings);
    });

    router.on('route:newTraining', function () {
      var newTrainingForm = new PhysicalManager.Views.TrainingForm({
        model: new PhysicalManager.Models.Training()
      });

      newTrainingForm.on('form:submitted', function (attrs) {
        attrs.id = trainings.isEmpty() ? 1 : (_.max(trainings.pluck('id')) + 1);
        trainings.add(attrs);
        router.navigate('trainings', true);
      });

      $('.main-container').html(newTrainingForm.render().$el);
      $('#datepicker').prop('readonly', true);
      $("#datepicker" ).datepicker({ dateFormat: "yy-mm-dd"});
    });
    Backbone.history.start();
  }
};