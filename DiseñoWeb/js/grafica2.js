$(function () {
    $('#containe').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Interaccion grupo'
        },
        xAxis: {
            categories: ['28 Marzo - 5 Mayo']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Mensajes'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -10,
            verticalAlign: 'top',
            y: 20,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'JuanB',
            data: [5]
        }, {
            name: 'KevinN',
            data: [2]
        }, {
            name: 'CristianR',
            data: [3]
        }, {
            name: 'AlexisS',
            data: [1]
        }, {
            name: 'AndresR',
            data: [2]
        }]
    });
});