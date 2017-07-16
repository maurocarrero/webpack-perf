import * as OfflinePluginRuntime from 'offline-plugin/runtime'
OfflinePluginRuntime.install()

import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'ramda'
import { isEmpty, isArray } from 'lodash'
import './styles.css'

import kakashiAnbu from './Kakashi_Anbu.png'

class WebpackPerf extends React.Component {
  render() {
    const add7 = _.add(7)
    const arr = [2]

    return (
      <div>
       <h1>Webpack Performance</h1>
        <p>Ramda says this is {add7(3)}</p>
        {
          isArray(arr) && <p>Lodash says this [] is an array</p>
        }
        {
          isEmpty(arr) && <p>and that is empty</p>
        }
        <img src={kakashiAnbu} alt="Kakashi ANBU"/>
      </div>
    )
  }
}

ReactDOM.render(
  <WebpackPerf />,
  document.getElementById('root')
)
