import React from 'react'
import { isEmpty, isArray } from 'lodash'
const arr = [2]

export default () => (
  <div>
    {
      isArray(arr) && <p>Lodash says this [] is an array</p>
    }
    {
      isEmpty(arr) && <p>and that is empty</p>
    }
  </div>
)

