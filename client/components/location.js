//
//
import React from 'react'
import Map from './map2'

export default props => {
  return (
    <div>
      <Map
        containerElement={<div style={{height: `100%`}} />}
        mapElement={<div style={{height: `100%`}} />}
      />
    </div>
  )
}
