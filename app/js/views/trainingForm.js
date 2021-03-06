PhysicalManager.Views.TrainingForm = Backbone.View.extend({
  //template: _.template($('#tpl-new-training').html()),
  template: Handlebars.templates.trainingform,

  events: {
    'submit .training-form': 'onFormSubmit'
  },

  initialize: function () {
    Backbone.Validation.bind(this, {
      valid: function (view, attr, selector) {
        var $el = view.$('[name=' + attr + ']'),
          $group = $el.closest('.form-group');

        $group.removeClass('has-error');
        $group.find('.help-block').html('&nbsp;');
      },
      invalid: function (view, attr, error, selector) {
        var $el = view.$('[name=' + attr + ']'),
          $group = $el.closest('.form-group');

        $group.addClass('has-error');
        $group.find('.help-block').html(error);
      }
    });
  },
  
  render: function () {
    var html = this.template(_.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    }));
    this.$el.append(html);
    return this;
  },

  onFormSubmit: function (e) {
    e.preventDefault();
    var data = this.$('#workout-form').serializeObject();
    this.model.set(data);
     if(this.model.isValid(true)){
            this.trigger('form:submitted', {
      time: parseInt(this.$('.training-time-input').val(),10),
      type: this.$('.training-type-input').val(),
      date: this.$('.training-date-input').val()
    });
        }
   
  }
});
