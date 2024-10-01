"use strict";

// document.getElementById("menu-toggle").addEventListener("click", function() {
//     document.getElementById("wrapper").classList.toggle("toggled");
//   });
//   // JavaScript for attendance chart (placeholder)
//   const attendanceChart = document.getElementById('attendance-chart');
//   attendanceChart.innerHTML = "<img src='chart-placeholder.png' alt='Attendance Chart' />";
// JavaScript to handle the toggle functionality
document.getElementById("sidebar-toggle").addEventListener("click", function () {
  document.getElementById("sidebar-wrapper").classList.toggle("collapsed");
});
document.getElementById("title").addEventListener("click", function () {
  document.getElementById("sidebar-wrapper").classList.toggle("collapsed");
});