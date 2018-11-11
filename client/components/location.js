import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {logout} from '../store'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import Typography from '@material-ui/core/Typography'
// import InputBase from '@material-ui/core/InputBase'
// import {fade} from '@material-ui/core/styles/colorManipulator'
// import {withStyles} from '@material-ui/core/styles'
// import MenuIcon from '@material-ui/icons/Menu'
// import SearchIcon from '@material-ui/icons/Search'
// import Button from '@material-ui/core/Button'
// import history from '../history'

class Location extends React.Component {
  initMap() {
    var directionsService = new google.maps.DirectionsService()
    var directionsDisplay = new google.maps.DirectionsRenderer()
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    })
    directionsDisplay.setMap(map)

    var onChangeHandler = function() {
      this.calculateAndDisplayRoute(directionsService, directionsDisplay)
    }
    document.getElementById('start').addEventListener('change', onChangeHandler)
    document.getElementById('end').addEventListener('change', onChangeHandler)
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route(
      {
        origin: document.getElementById('start').value,
        destination: document.getElementById('end').value,
        travelMode: 'DRIVING'
      },
      function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response)
        } else {
          console.log('Directions request failed due to ' + status)
        }
      }
    )
  }

  render() {
    //const src="https://maps.googleapis.com/maps/api/js?key='AIzaSyDpXz6yUvoe3-yuhdy0Y9q_p3xVPeC-Hpk'&callback=initMap">
    return (
      <div>
        <div id="floating-panel">
          <b>Start: </b>
          <select id="start">
            <option value="chicago, il">Chicago</option>
            <option value="st louis, mo">St Louis</option>
            <option value="joplin, mo">Joplin, MO</option>
            <option value="oklahoma city, ok">Oklahoma City</option>
            <option value="amarillo, tx">Amarillo</option>
            <option value="gallup, nm">Gallup, NM</option>
            <option value="flagstaff, az">Flagstaff, AZ</option>
            <option value="winona, az">Winona</option>
            <option value="kingman, az">Kingman</option>
            <option value="barstow, ca">Barstow</option>
            <option value="san bernardino, ca">San Bernardino</option>
            <option value="los angeles, ca">Los Angeles</option>
          </select>
          <b>End: </b>
          <select id="end">
            <option value="chicago, il">Chicago</option>
            <option value="st louis, mo">St Louis</option>
            <option value="joplin, mo">Joplin, MO</option>
            <option value="oklahoma city, ok">Oklahoma City</option>
            <option value="amarillo, tx">Amarillo</option>
            <option value="gallup, nm">Gallup, NM</option>
            <option value="flagstaff, az">Flagstaff, AZ</option>
            <option value="winona, az">Winona</option>
            <option value="kingman, az">Kingman</option>
            <option value="barstow, ca">Barstow</option>
            <option value="san bernardino, ca">San Bernardino</option>
            <option value="los angeles, ca">Los Angeles</option>
          </select>
        </div>
        <div id="map" />
      </div>
    )
  }
}

/**
 * CONTAINER
 */

export default Location
