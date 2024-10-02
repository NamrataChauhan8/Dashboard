"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['0', '22.5', '45', '67.5', '90'],
      datasets: [{
        label: 'Student score',
        data: [30, 50, 40, 60, 30],
        borderColor: '#b0b0b0',
        fill: false,
        tension: 0.4
      }, {
        label: 'Class average score',
        data: [20, 30, 50, 70, 40],
        borderColor: '#ff7f0e',
        fill: false,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      // Ensure the chart is responsive
      maintainAspectRatio: false,
      // Allow the chart to resize
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
});