import React from 'react'
import { Link } from 'react-router'

const activeLink = { backgroundColor: '#dedede' }

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Webpack Performance</h1>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/kakashi" activeStyle={activeLink}>Kakashi</Link></li>
            <li><Link to="/lodash-test" activeStyle={activeLink}>LodashTest</Link></li>
            <li><Link to="/ramda-test" activeStyle={activeLink}>RamdaTest</Link></li>
          </ul>
        </div>
        <section>{ this.props.children }</section>
      </div>
    )
  }
}
