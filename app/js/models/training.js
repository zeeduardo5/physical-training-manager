PhysicalManager.Models.Training = Backbone.Model.extend({
    defaults: {
        time: null,
        type: null,
        date: null
    },
    validation: {
        time: {
            required: true,
            msg: 'Please enter a valid time [1h-24h]',
            range: [1,24]
        },
        date: {
            required: true,
            msg: 'Please enter a valid Date'
        }
    }
});