import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {
  state = {
    location: 'Salto',
    latitude: -23.184660,
    longitude: -47.277512,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  constructor(props) {
    super(props);
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  handleChange = (name, e) => {
    this.setState({ [name]: e.target.value });
  }

  render() {
    return (
      <div className="App bg-light">
        <header className="App-header mx-3 pt-3">
          <h4 className="App-title">Google Maps - Marcador dinâmico</h4>
        </header>
        <section className="m-3">
          <form className="form-group">
            <div className="row">
              <div className="form-group col-sm-6">
                <label htmlFor="location">Informe a localização:</label>
                <input type="text" className="form-control" id="location" value={this.state.location} onChange={(e) => this.handleChange('location', e)} />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-6 mt-2">
                <label htmlFor="latitude">Informe a latitude:</label>
                <input type="text" className="form-control" id="latitude" value={this.state.latitude} onChange={(e) => this.handleChange('latitude', e)} />
              </div>
              <div className="form-group col-sm-6 mt-2">
                <label htmlFor="longitude">Informe a longitude:</label>
                <input type="text" className="form-control" id="longitude" value={this.state.longitude} onChange={(e) => this.handleChange('longitude', e)} />
              </div>
            </div>
          </form>
        </section>
        <Map
          google={this.props.google}
          zoom={5}
          initialCenter={{ lat: this.state.latitude, lng: this.state.longitude }}
        >
          <Marker
            name={this.state.location}
            position={{ lat: this.state.latitude, lng: this.state.longitude }}
            onClick={this.onMarkerClick}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

const LoadingContainer = () => (
  <div>Loading...</div>
)

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDZN71Y-8KpjRbqjPkn9OnNqTjbllLU4Dk"),
  LoadingContainer: LoadingContainer
})(App)