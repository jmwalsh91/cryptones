/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@mui/system'
import ReactApexChart from 'react-apexcharts'

//TODO: hover data disable ?
export default function ChartComponent({ data, name, interval }) {
  const currentTheme = useTheme()
  let chartParams = {
    series: [
      {
        data: data,
      },
    ],
    options: {
      chart: {
        foreColor: `${currentTheme.palette.text.primary}`,
        type: 'candlestick',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: `${name} price, ${interval}`,
        align: 'center',
      },
      markers: {
        strokeColors: `${currentTheme.palette.background.default}`,
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: `${currentTheme.palette.primary.main}`,
            downward: `${currentTheme.palette.error.main}`,
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
    <div
      id="chart"
      css={css`
        width: 100%;
      `}
    >
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
