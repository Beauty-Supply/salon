import React, {Component} from 'react'
import Map from './map2'
import NewMap from './map3'

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
