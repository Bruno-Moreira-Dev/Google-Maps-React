// import React from 'react';
// import { compose, withStateHandlers } from 'recompose';
// import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

// const Map = compose(
//   withStateHandlers(() => ({
//     isMarkerShown: false,
//     markerPosition: null
//   }),
//     {
//       onMapClick: () => (e) => ({
//         markerPosition: e.latLng,
//         isMarkerShown: true,
//       })
//     }),
//   withScriptjs,
//   withGoogleMap,
// )
//   (props =>
//     <GoogleMap
//       defaultZoom={8}
//       defaultCenter={{ lat: -23.184660, lng: -47.277512 }}
//       onClick={props.onMapClick}
//     >
//       {props.isMarkerShown && <Marker position={props.markerPosition} />}
//     </GoogleMap>
//   )

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Map
//         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZN71Y-8KpjRbqjPkn9OnNqTjbllLU4Dk"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//         position={{ lat: -23.184660, lng: -47.277512 }}
//       />
//     )
//   }
// }

import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDZN71Y-8KpjRbqjPkn9OnNqTjbllLU4Dk"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)