"use strict";

var ctx = document.getElementById('attendanceChart').getContext('2d');
var attendanceData = {
  labels: ['Present', 'Late', 'Absent', 'Holiday'],
  datasets: [{
    data: [93.98, 2, 4, 0.02],
    backgroundColor: ['#f0f0f0', '#ffbb33', '#ff7043', '#ffa726']
  }]
};
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: attendanceData,
  options: {
    cutout: '70%',
    plugins: {
      legend: {
        display: false
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