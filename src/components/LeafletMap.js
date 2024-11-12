import { MapWrapper } from "../styled-components/style";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const LeafletMap = () => {
  const position = [50.05666651571434, 21.612606910696275];

  return (
    <MapWrapper>
      <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Nasza apteka w Ropczycach</Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default LeafletMap;
