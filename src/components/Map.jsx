import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const Map = () => {
  const position = [23.279671, 77.3432286]; // Coordinates for Singh's Fitness Farm (S2F)
  const googleMapsUrl = "https://www.google.com/maps/place/Singh's+Fitness+Farm+(S2F)/@23.279671,77.3432286,17z/data=!3m1!4b1!4m6!3m5!1s0x397c674ed17ffae7:0x110af9b928bfba83!8m2!3d23.279671!4d77.3432286!16s%2Fg%2F11vcr9zlpx";

  return (
    <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Singh's Fitness Farm (S2F)<br />
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
