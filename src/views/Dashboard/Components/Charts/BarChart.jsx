// src/components/BarChart.jsx
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  const options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Comparativa de Solicitudes por Mes'
    },
    xAxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total de solicitudes'
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
      name: 'Rechazadas',
      data: [5, 3, 4, 7, 2, 0]
    }, {
      name: 'Pendientes',
      data: [2, 2, 3, 2, 1, 0]
    }, {
      name: 'Creadas',
      data: [3, 4, 4, 2, 5, 0]
    }]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
