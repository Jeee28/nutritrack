// Adjusted Area Chart Example for Nutritional Status
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Malnourished",
      lineTension: 0.3,
      backgroundColor: "rgba(255, 99, 132, 0.1)",
      borderColor: "rgba(255, 99, 132, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(255, 99, 132, 1)",
      pointBorderColor: "rgba(255, 99, 132, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
      pointHoverBorderColor: "rgba(255, 99, 132, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [30, 35, 32, 28, 25, 20, 22, 18, 15, 20, 25, 30],
    },
    {
      label: "Healthy",
      lineTension: 0.3,
      backgroundColor: "rgba(54, 162, 235, 0.1)",
      borderColor: "rgba(54, 162, 235, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(54, 162, 235, 1)",
      pointBorderColor: "rgba(54, 162, 235, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(54, 162, 235, 1)",
      pointHoverBorderColor: "rgba(54, 162, 235, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [180, 185, 190, 200, 210, 220, 215, 210, 205, 200, 195, 190],
    },
    {
      label: "Underweight",
      lineTension: 0.3,
      backgroundColor: "rgba(255, 206, 86, 0.1)",
      borderColor: "rgba(255, 206, 86, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(255, 206, 86, 1)",
      pointBorderColor: "rgba(255, 206, 86, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
      pointHoverBorderColor: "rgba(255, 206, 86, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [60, 55, 58, 50, 45, 40, 42, 45, 50, 55, 58, 60],
    },
    {
      label: "Overweight",
      lineTension: 0.3,
      backgroundColor: "rgba(75, 192, 192, 0.1)",
      borderColor: "rgba(75, 192, 192, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      pointBorderColor: "rgba(75, 192, 192, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
      pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [40, 38, 35, 40, 42, 45, 50, 52, 48, 45, 42, 40],
    },
    {
      label: "Obese",
      lineTension: 0.3,
      backgroundColor: "rgba(153, 102, 255, 0.1)",
      borderColor: "rgba(153, 102, 255, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(153, 102, 255, 1)",
      pointBorderColor: "rgba(153, 102, 255, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(153, 102, 255, 1)",
      pointHoverBorderColor: "rgba(153, 102, 255, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [20, 22, 25, 30, 35, 40, 38, 36, 32, 30, 28, 25],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 12
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          callback: function(value, index, values) {
            return value + ' children';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: true
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: true,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + tooltipItem.yLabel + ' children';
        }
      }
    }
  }
});
