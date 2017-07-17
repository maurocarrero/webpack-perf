import React from 'react'
import { Link } from 'react-router'

const activeLink = { backgroundColor: '#dedede' }

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Webpack Performance</h1>
        <div>
          <Link to="/public">Home</Link>
          <Link to="/public/kakashi" activeStyle={activeLink}>Kakashi</Link>
          <Link to="/public/lodash-test" activeStyle={activeLink}>LodashTest</Link>
          <Link to="/public/ramda-test" activeStyle={activeLink}>RamdaTest</Link>
        </div>
        { this.props.children }
      </div>
    )
  }
}
