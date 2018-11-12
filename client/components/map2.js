import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    return (
      <Map
        initialCenter={{
          lat: 40.854885,
          lng: 40.854885
        }}
        google={this.props.google}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={8}
      >
        <Marker
          position={{lat: -34.397, lng: 150.644}}
          onClick={this.onMarkerClick}
          name="Current location"
        />
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{lat: 37.778519, lng: -122.40564}}
        />
        <Marker
          name={'Dolores park'}
          position={{lat: 37.759703, lng: -122.428093}}
        />
        <Marker />
        <Marker
          name={'Your position'}
          position={{lat: 37.762391, lng: -122.439192}}
        />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1 />
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBGFUoZwQ4HeVqWvqf4nsjxLyxq_H1L9gU'
})(MapContainer)
