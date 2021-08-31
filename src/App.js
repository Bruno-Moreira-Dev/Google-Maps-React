import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import {  useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

const Map = compose(
  withStateHandlers(() => ({
    isMarkerShown: false,
    markerPosition: null
  }),
    {
      onMapClick: () => (e) => ({
        markerPosition: e.latLng,
        isMarkerShown: true,
      })
    }),
    useJsApiLoader
)
  (props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -23.184660, lng: -47.277512 }}
      onClick={props.onMapClick}
    >
      {props.isMarkerShown && <Marker position={props.markerPosition} />}
    </GoogleMap>
  )

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZN71Y-8KpjRbqjPkn9OnNqTjbllLU4Dk"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        position={{ lat: -23.184660, lng: -47.277512 }}
      />
    )
  }
}