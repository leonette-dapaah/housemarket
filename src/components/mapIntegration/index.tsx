// MapComponent.tsx
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';

interface MapComponentProps {
  center: [number, number];
  zoom: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ center, zoom }) => {
  const mapRef = useRef<null | L.Map>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  }, []);

  useEffect(() => {
    // Create the map
    if (mapRef.current === null) {
      mapRef.current = L.map('leaflet-map', { center, zoom });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }
  }, [center, zoom]);

  return <div id="leaflet-map" className="h-full w-full z-[0] " style={{ height: '100%', width: '100%' }} />;
};

export default MapComponent;
