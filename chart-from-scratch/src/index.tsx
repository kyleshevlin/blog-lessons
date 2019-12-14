import React from 'react'
import ReactDOM from 'react-dom'
import data from './data'

const Chart = ({ children, height, width }) => (
  <svg viewBox={`0 0 ${width} ${height}`} height={height} width={width}>
    {children}
  </svg>
)

const Bar = ({ fill = '#000', x, y, height, width }) => (
  <rect fill={fill} x={x} y={y} height={height} width={width} />
)

const greatestValue = values =>
  values.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity)

const BarChart = ({ data }) => {
  const barWidth = 20
  const barMargin = 5
  const width = data.length * (barWidth + barMargin)
  const height = greatestValue(data.map(datum => datum.lessonsWatched))

  return (
    <Chart height={height} width={width}>
      {data.map((datum, index) => (
        <Bar
          key={datum.name}
          fill="teal"
          x={index * (barWidth + barMargin)}
          y={height - datum.lessonsWatched}
          width={barWidth}
          height={datum.lessonsWatched}
        />
      ))}
    </Chart>
  )
}

const App = () => (
  <div>
    <h1>Chart From Scratch</h1>
    <BarChart data={data} />
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
