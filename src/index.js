import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'ramda'

import './styles.css'

class WebpackPerf extends React.Component {
  render() {
    const add7 = _.add(7)

    return (
      <div>
       <h1>Webpack Performance</h1>
        <p>Ramda says this is {add7(3)}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <WebpackPerf />,
  document.getElementById('root')
)
