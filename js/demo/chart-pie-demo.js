
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut', 
  data: {
    labels: ["Healthy", "Malnourished", "Underweight", "Overweight", "Obese"], 
    datasets: [{
      data: [40, 15, 20, 10, 15], 
      backgroundColor: ['#28a745', '#dc3545', '#ffc107', '#007bff', '#6f42c1'], 
      hoverBackgroundColor: ['#218838', '#c82333', '#e0a800', '#0056b3', '#5a3d7e'], 
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + tooltipItem.yLabel + '%'; 
        }
      }
    },
    legend: {
      position: 'top', 
      align: 'center',
    },
    cutoutPercentage: 80, 
  },
});
