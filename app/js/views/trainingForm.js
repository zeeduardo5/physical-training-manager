PhysicalManager.Views.TrainingForm = Backbone.View.extend({
  template: _.template($('#tpl-new-training').html()),

  events: {
    'submit .training-form': 'onFormSubmit'
  },

  render: function() {
    var html = this.template(_.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    }));
    this.$el.append(html);
    return this;
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    this.trigger('form:submitted', {
      time: this.$('.training-time-input').val(),
      type: this.$('.training-type-input').val(),
      date: this.$('.training-date-input').val()
    });
  }
});
