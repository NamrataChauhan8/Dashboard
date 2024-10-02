"use strict";

var ctx = document.getElementById('attendanceChart').getContext('2d');
var attendanceData = {
  labels: ['Present', 'Late', 'Absent', 'Holiday'],
  datasets: [{
    data: [93.98, 2, 4, 0.02],
    // Replace with your actual attendance data
    backgroundColor: ['#f0f0f0', // Present
    '#ffbb33', // Late
    '#ff7043', // Absent
    '#ffa726' // Holiday
    ]
  }]
};
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: attendanceData,
  options: {
    cutout: '70%',
    // Adjust the size of the hole in the donut
    plugins: {
      legend: {
        display: false // Hide the default Chart.js legend

      },
      tooltip: {
        callbacks: {
          label: function label(context) {
            var label = context.label || '';

            if (label) {
              label += ': ';
            }

            if (context.parsed !== null) {
              label += context.parsed.toFixed(2) + '%';
            }

            return label;
          }
        }
      }
    }
  }
});