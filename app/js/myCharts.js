function newChart(id, collection) {
    var ctx = document.getElementById(id);
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Total Hours", "Total Hours Today", "Running", "Swimming", "Walking", "Paddling"],
            datasets: [{
                label: {
                    display: false
                },
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                data: [collection.totalHours(),
                    collection.length > 0 ? collection.first().attributes.time : '0',
                    collection.totalHoursPerType('Running'),
                    collection.totalHoursPerType('Swimming'),
                    collection.totalHoursPerType('Walking'),
                    collection.totalHoursPerType('Paddling')],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: 'Custom Chart Title'
            },
            legend: {
                display: false
            }

        }
    });
}