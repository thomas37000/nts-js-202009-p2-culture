import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const DivMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .map {
    height: 650px;
    width: 750px;
  }
`;

const myIcon = L.icon({
  iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/0/619.svg',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, 41],
});

function Maps(props) {
  const { ...mapLeaflet } = props;
  console.log(mapLeaflet);
  const [leaflet, setLeaflet] = useState([]);
  const [lat, setLat] = useState(47.2173);
  const [lng, setLng] = useState(-1.5534);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    axios
      .get(
        `https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier`
      )
      .then((res) => {
        setLeaflet({
          leaflet: [...res.data.records],
        });
      });
  }, []);

  const position = [47.2173, -1.5534];

  return (
    <DivMap>
      <Map className="map" center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://
osm.org/copyright">OpenStreetMap</a> 
contributors'
          url="https://{s}.tile.openstreetmap.org/
{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}>
          <Popup>{leaflet.emmeteur}</Popup>
        </Marker>
      </Map>
    </DivMap>
  );
}

export default Maps;
