import React, { Component } from 'react';
import axios from 'axios';
import './Maps.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const myIcon = L.icon({
  iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/0/619.svg',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, 41],
});

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaflet: [],
      lat: 47.213792,
      lng: -1.555784,
      zoom: 10,
    };
    this.getMap = this.getMap.bind(this);
  }

  componentDidMount() {
    this.getMap();
  }

  getMap() {
    axios
      .get(
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier'
      )
      .then((res) => {
        this.setState({
          leaflet: [...res.data.records],
        });
      });
  }

  render() {
    const { leaflet, lat, lng, zoom } = this.state;
    const position = [lat, lng];

    return (
      <div className="maps">
        <MapContainer className="map" center={position} zoom={zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://
osm.org/copyright">OpenStreetMap</a> 
contributors'
            url="https://{s}.tile.openstreetmap.org/
{z}/{x}/{y}.png"
          />
          <Marker position={leaflet.location} icon={myIcon}>
            <Popup>{leaflet.emmeteur}</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}

export default Maps;
