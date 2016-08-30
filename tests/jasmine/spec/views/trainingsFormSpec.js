describe('View :: Training Form', function () {
  var mockData = { id: '1', time: '3', type: 'Running', date: '2001-02-20' };

  beforeEach(function () {
    var flag = false,
      that = this;

    require(['js/collections/trainingcollection'], function (Todo) {
      that.trainingCollection = new PhysicalManager.Collections.TrainingCollection([mockData]);

    });
    require(['js/models/training', '../vendor/backbone/jquery.serializeObject', 'js/views/trainings', 'js/views/training', 'js/views/trainingForm'], function (todo, view) {
      that.view = new PhysicalManager.Views.TrainingForm({ model: new PhysicalManager.Models.Training() });
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

  describe('Elements on the view', function () {
    it('should be visible', function () {
      expect(this.view.$el.is(':visible')).toEqual(true);
    });
    it('should have panel', function () {
      expect($('.panel-heading')).not.toBe(null);
    });
    it('should have all elements', function () {

      expect($('.training-time-input').is(':visible')).toBe(true);
      expect($('.training-type-input').is(':visible')).toBe(true);
      expect($('.training-date-input').is(':visible')).toBe(true);
      expect($('#submitButton').is(':visible')).toBe(true);
      expect($('#cancelButton').is(':visible')).toBe(true);
      expect($('.delete-training').is(':visible')).toBe(false);

    });
    describe('Validation', function () {
      
      it('should have panel', function () {
        expect($('.panel-heading')).not.toBe(null);
      });

      it('should be invalid when date is missing', function () {
        $('.training-time-input').val('3');
        $('#submitButton').click();
        expect($('.help-block').text().trim()).toBe('Please enter a valid Date');
      });

      it('should be invalid when time is missing', function () {
        $('.training-date-input').val('2001-02-20');
        $('#submitButton').click();
        expect($('.help-block').text().trim()).toBe('Please enter a valid time');
      });

      it('should be invalid when time is negative', function () {
        $('.training-date-input').val('2001-02-20');
        $('.training-time-input').val('-3');
        $('#submitButton').click();
        expect($('.help-block').text().trim()).toBe('Please enter a valid time');
      });

      it('should be valid', function () {
        $('.training-date-input').val('2001-02-20');
        $('.training-time-input').val('3');
        $('#submitButton').click();
        expect($('.help-block').text().trim()).toBe('');
      });
    });
  });
});