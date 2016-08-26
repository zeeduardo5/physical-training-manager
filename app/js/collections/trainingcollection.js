PhysicalManager.Collections.TrainingCollection = Backbone.Collection.extend({
    model: PhysicalManager.Models.Training,
    totalHours: function(){
        return this.reduce(function(memo, value) { return memo + value.get("time") }, 0);
    }
});