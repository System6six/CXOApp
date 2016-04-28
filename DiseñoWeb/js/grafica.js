
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Interaccion Personal'
        },
        xAxis: {
            categories: ['Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Mensajes'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'JuanB',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'KevinN',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'CristianR',
            data: [3, 4, 4, 2, 5]
        }, {
            name: 'AlexisS',
            data: [1, 2, 3, 2, 1]
        }, {
            name: 'AndresR',
            data: [2, 4, 1, 1, 2]
        }]
    });
});
