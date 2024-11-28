import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { companyInfo } from '../data/company-info';

const Map = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initMap = async () => {
      try {
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

        // Add marker with company info
        L.marker(coordinates)
          .addTo(mapInstanceRef.current)
          .bindPopup(
            `<div class="p-2">
              <h3 class="font-bold">${companyInfo.name}</h3>
              <p>${companyInfo.contact.address}</p>
            </div>`
          )
          .openPopup();
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    initMap();

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
      className="h-[400px] w-full rounded-lg shadow-lg"
      style={{ background: '#f0f0f0' }}
    />
  );
};

export default Map;
