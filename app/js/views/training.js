PhysicalManager.Views.Training = Backbone.View.extend({
  tagName: 'tr',
  template: Handlebars.templates.training,
  events: {
    'click .delete-training': 'onClickDelete'
  },

  initialize: function() {
    this.listenTo(this.model, 'remove', this.remove);
  },
  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },

  onClickDelete: function(e) {
    e.preventDefault();
    $('#totalHours').text(this.model.collection.totalHours() - this.model.attributes.time + ' hours of Workout');
    this.model.collection.remove(this.model.id);
    PhysicalManager.pubSub.trigger('view2event', { 'some' : 'data' } );
  },
});
