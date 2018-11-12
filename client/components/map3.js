import {load_google_maps} from '../../utils'
import React from 'react'

class NewMap extends React.Component {
  componentDidMount() {
    let gmp = load_google_maps()

    Promise.all([gmp]).then(values => {
      console.log(values)
      let google = values[0]
      this.google = google
      this.markers = []
      this.map = new google.maps.Map(document.getElementById('root'), {
        zoom: 9,
        scrollwheel: true,
        center: {lat: '40.854885', lng: '40.854885'}
      })
      //this.marker={}
      let marker = new google.maps.Marker({
        position: {lat: '37.762391', lng: '-122.439192'},
        map: this.map,
        name: 'Aunty Salon',
        id: 1,
        animation: google.maps.Animation.DROP
      })
      this.markers.push(marker)
    })
  }
  render() {
    return <div />
  }
}

export default NewMap
