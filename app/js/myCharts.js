function newChart(id, collection) {
    var ctx = document.getElementById(id);

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Running", "Swimming", "Walking", "Paddling"],
            datasets: [{
                label: {
                    display: false
                },
                backgroundColor: [
                    'rgba(255,0,0,0.3)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,0,0,0.3)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                data: [
                    collection.totalHoursPerType('Running'),
                    collection.totalHoursPerType('Swimming'),
                    collection.totalHoursPerType('Walking'),
                    collection.totalHoursPerType('Paddling')],
                borderWidth: 0
            }]
        },
        tooltip : {
            display	:false
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: collection.totalHours()
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Total Hours (h)'
                    }
                }]
            },
            title: {
                display: true,
                text: collection.totalHours() + ' hours of Workout'
            },
            legend: {
                display: false
            },
            tooltips:{
       
                enabled :false
            } 

        }
    });
}