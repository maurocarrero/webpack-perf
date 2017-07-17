import React from 'react'
import _ from 'ramda'

const add7 = _.add(7)

export default () => <p>Ramda says this is {add7(3)}</p>

