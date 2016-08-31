PhysicalManager.Collections.TrainingCollection = Backbone.Collection.extend({
    model: PhysicalManager.Models.Training,
    totalHours: function () {
        return this.reduce(function (sum, value) { return sum + parseInt(value.get("time")) }, 0);
    },
    totalHoursPerType: function (type) {
        return this.reduce(function (sum, value) { if (value.get("type") == type) { return sum + parseInt(value.get("time")) } else return sum }, 0);
    }
    
});