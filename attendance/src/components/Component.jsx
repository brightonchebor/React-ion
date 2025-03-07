import React, { useState, useEffect } from 'react';
import './GeoAttendance.css';
import { MapContainer, TileLayer, Marker, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// A small utility to compute distance (in meters) between two lat/long points using the Haversine formula
function getDistanceFromLatLonInM(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const toRad = (val) => (val * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in meters
  return distance;
}

// Default icon for markers
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const officeLocation = {
  lat: 37.7749,   // Example: San Francisco
  lng: -122.4194,
  address: '123 Business Ave, San Francisco',
};

// Circle radius (in meters) for geofencing
const officeRadius = 200;

const GeoAttendance = () => {
  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
  const [distanceToOffice, setDistanceToOffice] = useState(null);
  const [isWithinOffice, setIsWithinOffice] = useState(false);
  const [clockedIn, setClockedIn] = useState(false);

  // Sample attendance logs
  const [attendanceLogs, setAttendanceLogs] = useState([
    { date: 'May 14, 2023', clockIn: '08:56 AM', clockOut: '04:45 PM' },
    { date: 'May 13, 2023', clockIn: '09:10 AM', clockOut: '05:15 PM' },
  ]);

  // Today's status
  const [todayClockIn, setTodayClockIn] = useState(null);
  const [todayClockOut, setTodayClockOut] = useState(null);

  // Get user's current location
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation not supported');
    }
  }, []);

  // Recalculate distance whenever userLocation changes
  useEffect(() => {
    if (userLocation.lat && userLocation.lng) {
      const dist = getDistanceFromLatLonInM(
        userLocation.lat,
        userLocation.lng,
        officeLocation.lat,
        officeLocation.lng
      );
      setDistanceToOffice(dist);
      setIsWithinOffice(dist <= officeRadius);
    }
  }, [userLocation]);

  // Handler for Clock In
  const handleClockIn = () => {
    if (!isWithinOffice) {
      alert('You must be within the office area to clock in!');
      return;
    }
    setClockedIn(true);
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTodayClockIn(timeString);
  };

  // Handler for Clock Out
  const handleClockOut = () => {
    if (!clockedIn) {
      alert('You are not clocked in!');
      return;
    }
    setClockedIn(false);
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTodayClockOut(timeString);

    // Add to attendance logs (for demonstration)
    const dateString = now.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    setAttendanceLogs((prevLogs) => [
      { date: dateString, clockIn: todayClockIn || 'N/A', clockOut: timeString },
      ...prevLogs,
    ]);
  };

  // A small helper component to re-center the map on user location
  function RecenterOnUser({ lat, lng }) {
    const map = useMap();
    if (lat && lng) {
      map.setView([lat, lng], 14);
    }
    return null;
  }

  return (
    <div className="geoAttendanceContainer">
      {/* Top Bar */}
      <header className="headerBar">
        <div className="headerTitle">GeoAttendance</div>
        <button className="joinButton">Join Doe</button>
      </header>

      {/* Main Content */}
      <div className="mainContent">
        {/* Left Panel: Map & Clock In/Out */}
        <div className="mapSection">
          <div className="mapCard">
            <div className="statusBadge">
              {isWithinOffice ? 'Location Active' : 'Location Inactive'}
            </div>
            {/* Map Container */}
            <div className="mapWrapper">
              <MapContainer
                center={[officeLocation.lat, officeLocation.lng]}
                zoom={13}
                style={{ height: '300px', width: '100%', borderRadius: '10px' }}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Office circle */}
                <Circle
                  center={[officeLocation.lat, officeLocation.lng]}
                  radius={officeRadius}
                  pathOptions={{ color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 0.2 }}
                />
                {/* Office marker */}
                <Marker
                  position={[officeLocation.lat, officeLocation.lng]}
                  icon={defaultIcon}
                />
                {/* User marker */}
                {userLocation.lat && userLocation.lng && (
                  <Marker
                    position={[userLocation.lat, userLocation.lng]}
                    icon={defaultIcon}
                  />
                )}
                <RecenterOnUser lat={userLocation.lat} lng={userLocation.lng} />
              </MapContainer>
            </div>
            <div className="locationInfo">
              <p>
                Lat: {userLocation.lat?.toFixed(4)} | Long: {userLocation.lng?.toFixed(4)}
              </p>
              <p>
                <strong>Office Location</strong><br />
                {officeLocation.address}
              </p>
            </div>
            <div className="buttonRow">
              <button className="clockButton clockIn" onClick={handleClockIn}>
                Clock In
              </button>
              <button className="clockButton clockOut" onClick={handleClockOut}>
                Clock Out
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel: Attendance Dashboard */}
        <div className="dashboardSection">
          <div className="dashboardCard">
            <h3>Attendance Dashboard</h3>
            <div className="todayStatus">
              <div className="statusHeader">Today's Status</div>
              <div className="timeRow">
                <span>Clock In:</span>
                <span>{todayClockIn || '--:--'}</span>
              </div>
              <div className="timeRow">
                <span>Clock Out:</span>
                <span>{todayClockOut || '--:--'}</span>
              </div>
            </div>

            <div className="recentActivity">
              <div className="statusHeader">Recent Activity</div>
              {attendanceLogs.map((log, index) => (
                <div key={index} className="activityItem">
                  <div>{log.date}</div>
                  <div>
                    <span>Clock In: {log.clockIn}</span> | <span>Clock Out: {log.clockOut}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="historyButton">View Full History</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoAttendance;
