import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import useSWR from 'swr'

import { cryptonesApi } from '~/services/Axios'

const fetcherOhlcv = (url: string) =>
  cryptonesApi.get(url).then((res) => res.data)

export default function ChartComponent() {
  const { data } = useSWR('/api/ohlcv', fetcherOhlcv)
  const options: ApexOptions = {
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
  }
  return (
    <div id="chart">
      {data ? (
        <ReactApexChart
          options={options}
          series={data}
          type="candlestick"
          height={350}
        />
      ) : null}
    </div>
  )
}
