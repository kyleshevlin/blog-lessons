import React from 'react'
import ReactDOM from 'react-dom'

const value = {
  name: 'Kyle Shevlin',
  age: 34,
  location: 'Portland, OR',
}

const Log = ({
  value,
  replacer = null,
  space = 2,
}) => (
  <pre
    style={{
      backgroundColor: '#eee',
      padding: '1em',
    }}
  >
    <code>
      {JSON.stringify(value, replacer, space)}
    </code>
  </pre>
)

const App = () => <Log value={value} />

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
