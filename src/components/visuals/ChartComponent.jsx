import ReactApexChart from 'react-apexcharts'

export default function ChartComponent({ data }) {
  let chartParams = {
    series: [
      {
        data: data,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'candlestick',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'BTC PRICE',
        align: 'left',
      },
      markers: {
        strokeColors: '#08c9c9',
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#53e6e6',
            downward: 'rgba(253,147,0,0.73)',
          },
        },
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        type: 'datetime',
      },
    },
  }
  return (
    <div id="chart">
      <ReactApexChart
        options={chartParams.options}
        series={chartParams.series}
        type="candlestick"
        height={350}
      />
      {console.log(chartParams.series)}
    </div>
  )
}
