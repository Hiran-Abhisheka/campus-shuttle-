import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom shuttle icon
const shuttleIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-purple.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Stop icons
const stopIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const completedStopIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface RouteMapProps {
  route?: [number, number][];
  shuttlePosition?: [number, number];
  currentStop?: number;
  isTracking?: boolean;
}

const RouteMap: React.FC<RouteMapProps> = ({
  route = [
    [6.9271, 79.8612], // Colombo
    [6.9147, 79.9725], // Rajagiriya
    [6.9000, 79.9580], // Nugegoda
    [6.8650, 79.8997], // Moratuwa
  ],
  shuttlePosition,
  currentStop = 1,
  isTracking = false
}) => {
  const [currentShuttlePos, setCurrentShuttlePos] = useState<[number, number]>(
    shuttlePosition || route[1]
  );

  // Simulate shuttle movement if tracking is enabled
  useEffect(() => {
    if (!isTracking) return;

    const interval = setInterval(() => {
      setCurrentShuttlePos(prev => {
        // Simple simulation - move towards next stop
        const nextStopIndex = Math.min(currentStop + 1, route.length - 1);
        const nextStop = route[nextStopIndex];
        const currentIndex = route.findIndex(([lat, lng]) =>
          Math.abs(lat - prev[0]) < 0.001 && Math.abs(lng - prev[1]) < 0.001
        );

        if (currentIndex >= route.length - 1) return prev;

        // Move 10% towards next stop
        const latDiff = nextStop[0] - prev[0];
        const lngDiff = nextStop[1] - prev[1];

        return [
          prev[0] + latDiff * 0.1,
          prev[1] + lngDiff * 0.1
        ];
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [isTracking, currentStop, route]);

  const getStopIcon = (stopIndex: number) => {
    if (stopIndex < currentStop) return completedStopIcon;
    if (stopIndex === currentStop) return shuttleIcon;
    return stopIcon;
  };

  const getStopStatus = (stopIndex: number) => {
    if (stopIndex < currentStop) return 'Completed';
    if (stopIndex === currentStop) return 'Current Stop';
    return 'Upcoming';
  };

  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <MapContainer
        center={route[0] as [number, number]}
        zoom={12}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline
          positions={route as [number, number][]}
          pathOptions={{ color: 'purple', weight: 4, opacity: 0.8 }}
        />
        {route.map((pos, idx) => (
          <Marker position={pos as [number, number]} key={idx} icon={getStopIcon(idx)}>
            <Popup>
              <div style={{ textAlign: 'center' }}>
                <strong>Stop {idx + 1}</strong><br />
                <small>{getStopStatus(idx)}</small>
              </div>
            </Popup>
          </Marker>
        ))}
        <Marker position={currentShuttlePos} icon={shuttleIcon}>
          <Popup>
            <div style={{ textAlign: 'center' }}>
              <strong>🚐 Shuttle Location</strong><br />
              <small>Live Tracking Active</small>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {isTracking && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '8px 12px',
          borderRadius: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#333'
        }}>
          🔴 LIVE
        </div>
      )}
    </div>
  );
};

export default RouteMap;
