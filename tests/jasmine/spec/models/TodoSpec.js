describe('Model :: Todo', function() {

  var mockData = { id :'1', time : '3', type: 'Running', date: '2001-02-20' };
 
  beforeEach(function() {
    var that = this,
        done = false;
   
   window.PhysicalManager = {
      Models: {},
      Collections: {},
      Views: {},
    }

    require(['js/models/training'], function(Todo) {
      that.todo = new PhysicalManager.Models.Training();
      done = true;
    });
    require(['js/collections/trainingcollection'], function(Todo) {
      that.todos = new PhysicalManager.Collections.TrainingCollection({

      });
      done = true;
    });

    waitsFor(function() {
      return done;
    }, "Create Models");

  });

  afterEach(function(){
    var done = false,
        isDone = function(){ return done; };

    this.todos.remove(this.todo)
    console.log(this.todos);
    waitsFor(isDone);

    done = false;
    this.todo.destroy({
      success: function(){
        done = true;
      }
    });
    
    waitsFor(isDone);

  });

  describe('.Create()', function() {

    it('should create a todo', function() {
      var done = false;
      var todo = this.todos.add(mockData);
     // waitsFor(function() { return done; });

      runs(function(){
    
        expect(todo).not.toBe(null);
        expect(todo.attributes.time).toEqual('3');
        expect(todo.attributes.type).toEqual('Running');
        expect(todo.attributes.date).toEqual('2001-02-20');
        expect(todo.id).toEqual(jasmine.any(String));
     
        
      });

    });

    it('should fail creating a empty training', function() {
      expect(todo).not.toBe(null);
      expect(this.todo.id).toBeUndefined();
    });

  });
/*
  describe('.Read()', function() {
    it('should read models from collection', function() {
      var done = false,
          spy = jasmine.createSpy();
          todos = this.todos;

      todos.on('reset', spy);
      this.todo.on('sync', spy);


      this.todo.on('sync', function(){
        expect(todos.size()).toEqual(0);
        expect(spy.callCount).toEqual(1);

        todos.reset();

        expect(todos.size()).toEqual(0);
        expect(spy.callCount).toEqual(2);

        todos.fetch({
          success: function(){
            expect(todos.size()).toEqual(1);
            expect(spy.callCount).toEqual(3);
            done = true;
          }
        });

      }, this);

      this.todo.save(mockData);


      waitsFor(function() { return done; });

    });
/*
    it('should have proper remaining and completed methods', function() {

      var completedMock = _.extend({completed: true}, mockData);
      this.todos.add([mockData,mockData,mockData,completedMock]);

      expect(this.todos.remaining().length).toEqual(3);
      expect(this.todos.completed().length).toEqual(1);

      this.todos.remaining()[0].set({completed: true});
        
      expect(this.todos.remaining().length).toEqual(2);
      expect(this.todos.completed().length).toEqual(2);

    });*/
//  });


});