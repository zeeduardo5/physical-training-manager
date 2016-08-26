PhysicalManager.Views.Training = Backbone.View.extend({
  tagName: 'tr',
  template: _.template($('#tpl-training').html()),

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
    this.model.collection.remove(this.model);
  },
});
