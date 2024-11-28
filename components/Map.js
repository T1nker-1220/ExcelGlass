import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { companyInfo } from '../data/company-info';

const Map = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initMap = async () => {
      // Dynamically import Leaflet on client-side only
      const L = (await import('leaflet')).default;

      if (!mapRef.current || mapInstanceRef.current) return;

      // Fix Leaflet's icon path issues with Next.js
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        iconUrl: '/leaflet/marker-icon.png',
        shadowUrl: '/leaflet/marker-shadow.png',
      });

      // Excel Glass coordinates
      const coordinates = [14.537772, 121.001432]; // Latitude, Longitude

      // Initialize map
      mapInstanceRef.current = L.map(mapRef.current).setView(coordinates, 17);

      // Add OpenStreetMap tiles with a modern style
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapInstanceRef.current);

      // Create custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `
          <div style="
            background-color: #1e40af;
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            font-weight: 500;
            font-size: 14px;
            white-space: nowrap;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          ">
            ${companyInfo.name}
          </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
      });

      // Add marker with custom icon
      const marker = L.marker(coordinates, { icon: customIcon })
        .addTo(mapInstanceRef.current);

      // Add popup with company information
      marker.bindPopup(`
        <div style="min-width: 200px; padding: 12px;">
          <h3 style="font-weight: bold; margin-bottom: 8px; color: #1e40af;">
            ${companyInfo.name}
          </h3>
          <p style="margin: 4px 0; color: #4b5563;">
            ${companyInfo.contact.address}
          </p>
          <div style="margin-top: 8px;">
            <a
              href="https://www.openstreetmap.org/?mlat=${coordinates[0]}&mlon=${coordinates[1]}&zoom=19"
              target="_blank"
              rel="noopener noreferrer"
              style="color: #1e40af; text-decoration: underline;"
            >
              View on OpenStreetMap
            </a>
          </div>
        </div>
      `, {
        maxWidth: 300,
        closeButton: true,
        closeOnClick: false,
      }).openPopup();
    };

    initMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef}
      className="h-full w-full relative bg-gray-100 min-h-[400px]"
      style={{ zIndex: 0 }}
    />
  );
};

export default Map;
