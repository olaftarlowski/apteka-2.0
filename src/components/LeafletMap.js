// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// // import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// import { MapWrapper } from "../styled-components/style";

// delete L.Icon.Default.prototype._getIconUrl;

// // L.Icon.Default.mergeOptions({
// //   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
// //   iconUrl: require("leaflet/dist/images/marker-icon.png"),
// //   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// // });

// const LeafletMap = () => {
//   const position = [50.05666651571434, 21.612606910696275];

//   return (
//     <MapWrapper>
//       <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>Nasza apteka w Ropczycach</Popup>
//         </Marker>
//       </MapContainer>
//     </MapWrapper>
//   );
// };

// export default LeafletMap;
