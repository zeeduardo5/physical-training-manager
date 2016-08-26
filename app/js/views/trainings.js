PhysicalManager.Views.Trainings = Backbone.View.extend({
  template: _.template($('#tpl-trainings').html()),

  renderOne: function(training) {
    var itemView = new PhysicalManager.Views.Training({model: training});
    this.$('.trainings-container').append(itemView.render().$el);
  },
  render: function() {
    var html = this.template();
    this.$el.html(html);
    this.collection.each(this.renderOne, this);
    return this;
  }
});
