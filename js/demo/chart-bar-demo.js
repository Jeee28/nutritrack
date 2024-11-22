// Stacked Bar Chart Example - Nutritional Categories by Age Group
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["0–2 years", "3–5 years", "6–8 years", "9–12 years"],
    datasets: [
      {
        label: "Malnourished",
        backgroundColor: "#ff6384",
        hoverBackgroundColor: "#ff6384",
        borderColor: "#ff6384",
        data: [15, 20, 10, 5],
      },
      {
        label: "Healthy",
        backgroundColor: "#36a2eb",
        hoverBackgroundColor: "#36a2eb",
        borderColor: "#36a2eb",
        data: [50, 70, 80, 100],
      },
      {
        label: "Underweight",
        backgroundColor: "#ffce56",
        hoverBackgroundColor: "#ffce56",
        borderColor: "#ffce56",
        data: [10, 15, 20, 25],
      },
      {
        label: "Overweight",
        backgroundColor: "#4bc0c0",
        hoverBackgroundColor: "#4bc0c0",
        borderColor: "#4bc0c0",
        data: [5, 10, 15, 20],
      },
      {
        label: "Obese",
        backgroundColor: "#9966ff",
        hoverBackgroundColor: "#9966ff",
        borderColor: "#9966ff",
        data: [2, 5, 10, 15],
      }
    ],
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
        stacked: true,
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          min: 0,
          max: 150,
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
      display: true,
      position: 'bottom',
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: true,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + tooltipItem.yLabel + ' children';
        }
      }
    },
  }
});
