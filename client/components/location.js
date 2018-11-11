import React from 'react'
import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer'
//import Map from './map'

/* const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
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

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({isMarkerShown: true})
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({isMarkerShown: false})
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MyFancyComponent*/

//{
/*class Map extends React.Component {
  render() {
    const markers = this.props.markers || []
    return (
      <div>
        <GoogleMap
          ref={this.props.onMapLoad}
          defaultZoom={8}
          defaultCenter={{lat: -34.397, lng: 150.644}}
          onClick={this.props.onMapCick}
        >
          {/*{props.isMarkerShown &&
           <Marker position={{ lat: -34.397, lng: 150.644 }} />*/
//}
//{
/* markers.map((marker, index) => (
            <Marker
              {...marker}
              onRightClick={() => this.props.onMarkerRightClick(index)}
            />
          ))}
        </GoogleMap>
      </div>
    )
  }
}
export default withGoogleMap(Map)
}*/

const MyMapComponent = compose(
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

class Location extends React.Component {
  state = {
    isMarkerShown: false
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({isMarkerShown: true})
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({isMarkerShown: false})
    this.delayedShowMarker()
  }

  render() {
    return (
      <div>
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
      </div>
    )
  }
}

export default Location
