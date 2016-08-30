PhysicalManager.Views.Trainings = Backbone.View.extend({
  template: Handlebars.templates.trainings,

  initialize: function() {
	  PhysicalManager.pubSub.on('view2event', this.onChange, this);
  },
  renderOne: function (training) {
    var itemView = new PhysicalManager.Views.Training({ model: training });
    this.$('.trainings-container').append(itemView.render().$el);
  },
  render: function () {
    var html = this.template();
    this.$el.html(html);
    this.collection.each(this.renderOne, this);
    return this;
  }, 
  onChange : function() { 
    this.render();
    $('#totalHours').text(this.collection.totalHours() + ' hours of Workout');
    newChart("myChart",this.collection);
   }
});
