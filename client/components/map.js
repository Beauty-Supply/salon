import React from 'react'
import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

class Map extends React.Component {
  render() {
    const markers = this.props.markers || []
    return (
      <GoogleMap
        defaultCenter={{lat: -25.363882, lng: 131.044922}}
        defaultZoom={3}
      >
        {markers.map((marker, index) => <Marker {...marker} />)}
      </GoogleMap>
    )
  }
}
export default withGoogleMap(Map)

/*const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBGFUoZwQ4HeVqWvqf4nsjxLyxq_H1L9gU&libraries=geometry,drawing,places',
    loadingElement: <div style={{height: `100%`}} />,
    containerElement: <div style={{height: `400px`}} />,
    mapElement: <div style={{height: `100%`}} />
  }),
  withScriptjs,
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644}}>
      {props.isMarkerShown && (
        <Marker
          position={{lat: -34.397, lng: 150.644}}
          onClick={props.onMarkerClick}
        />
      )}
    </GoogleMap>
  ))
)
*/
/* <script
      defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGFUoZwQ4HeVqWvqf4nsjxLyxq_H1L9gU"
    ></script> */
