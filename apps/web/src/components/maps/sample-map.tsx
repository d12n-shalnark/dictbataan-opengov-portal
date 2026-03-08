import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function SampleMap() {
  return (
    <div className="h-100 w-full">
      <MapContainer
        center={[14.676, 120.536]}
        zoom={10}
        className="h-full w-full rounded-lg"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[14.676, 120.536]}>
          <Popup>
            Balanga City
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}