describe('View :: Trainings view', function () {
  var mockData = { id: '1', time: '3', type: 'Running', date: '2001-02-20' };
  var formView;
  beforeEach(function () {
    var flag = false,
      that = this;

    require(['js/collections/trainingcollection'], function (Todo) {
      that.trainingCollection = new PhysicalManager.Collections.TrainingCollection([mockData]);

    });
    require(['js/models/training', 'js/views/trainings', 'js/views/training', 'js/views/trainingForm'], function (todo, view) {
      that.view = new PhysicalManager.Views.Trainings({ collection: this.trainingCollection });
      $('#sandbox').html(that.view.render().el);
      flag = true;
    });

    waitsFor(function () {
      return flag;
    });
  });

  afterEach(function () {
    this.view.remove();
  });

  describe('Shows And Hides', function () {
    it('should be visible', function () {
      expect(this.view.$el.is(':visible')).toEqual(true);
    });

    it('should have panel', function () {
      expect($('.panel-heading')).not.toBe(null);
    });

    it('should have button add', function () {
      expect($('.btn')).not.toBe(null);
      expect($('.btn').text()).toBe(' Add Workout');
    });

    it('should test delete', function () {
      expect($('.delete-training')).not.toBe(null);
      $('.delete-training').click();
      expect($('.delete-training').is(':visible')).toBe(false);
    });

  });
});