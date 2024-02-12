// src/components/DashboardChart.jsx
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DashboardChart = () => {
  const options = {
    title: {
      text: 'Solicitudes Mensuales'
    },
    yAxis: {
      title: {
        text: 'Número de Solicitudes'
      }
    },
    xAxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    },
    series: [
      {
        name: 'Creadas',
        data: [29, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]
      },
      {
        name: 'Rechazadas',
        data: [8, 5, 11, 18, 17, 21, 15, 12, 13, 9, 3, 5]
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default DashboardChart;
