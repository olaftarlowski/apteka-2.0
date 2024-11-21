import { MapWrapper } from "../styled-components/style";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const LeafletMap = () => {
  const position = [49.944587, 21.611151];

  return (
    <MapWrapper>
      <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Nasza apteka w Wielopolu Skrzyńskim</Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default LeafletMap;
