PhysicalManager.Collections.TrainingCollection = Backbone.Collection.extend({
    model: PhysicalManager.Models.Training,
    totalHours: function(){
        return this.reduce(function(sum, value) { return sum + parseInt(value.get("time")) }, 0);
    }
});