describe('Model :: Test', function () {
  var mockData = { id: '1', time: '3', type: 'Running', date: '2001-02-20' };
  var mockData2 = { id: '2', time: '4', type: 'Running', date: '2001-02-20' };
  window.PhysicalManager = {
    Models: {},
    Collections: {},
    Views: {},
  }

  beforeEach(function () {
    var that = this,
      done = false;

    require(['js/models/training'], function (Todo) {
      that.trainingModel = new PhysicalManager.Models.Training();

    });
    require(['js/collections/trainingcollection'], function (Todo) {
      that.trainingCollection = new PhysicalManager.Collections.TrainingCollection([mockData, mockData2]);
      done = true;
    });

    waitsFor(function () {
      return done;
    }, "Create Models");

  });

  afterEach(function () {
    var done = false,
      isDone = function () { return done; };

    this.trainingCollection = null;
    waitsFor(isDone);

    done = false;
    this.trainingModel.destroy({
      success: function () {
        done = true;
      }
    });

    waitsFor(isDone);

  });

  describe('.Create()', function () {

    it('should create a valid model', function () {
      var done = false;
      var trainingModel = this.trainingCollection.get(mockData);

      runs(function () {
        expect(trainingModel).not.toBe(null);
        expect(trainingModel.attributes.time).toEqual('3');
        expect(trainingModel.attributes.type).toEqual('Running');
        expect(trainingModel.attributes.date).toEqual('2001-02-20');
        expect(trainingModel.id).toEqual(jasmine.any(String));
      });

    });

    it('should create empty model', function () {
      var trainingModel = this.trainingCollection.add({});
      runs(function () {
        expect(trainingModel).not.toBe(null);
        expect(this.trainingModel.id).toBeUndefined();
      });
    });
  });

  describe('.Read()', function () {
    it('should read models from collection', function () {
      trainingCollection = this.trainingCollection;

      trainingCollection.add(mockData);
      trainingCollection.add(mockData2);
      expect(trainingCollection.size()).toEqual(2);
      trainingCollection.remove(mockData);

      expect(trainingCollection.size()).toEqual(1);
      trainingCollection.remove(mockData2);
      expect(trainingCollection.size()).toEqual(0);
    });

    it('should test totalHours from collection', function () {
      trainingCollection = this.trainingCollection;

      trainingCollection.add(mockData);
      trainingCollection.add(mockData2);
     
      expect(trainingCollection.totalHours()).toEqual(7);
     
      trainingCollection.remove(mockData);

      expect(trainingCollection.totalHours()).toEqual(4);
    });
  });
});