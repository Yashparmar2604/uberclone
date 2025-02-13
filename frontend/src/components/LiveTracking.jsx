import React, { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const LiveTracking = () => {
    const [currentPosition, setCurrentPosition] = useState(center);
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        if (!navigator.geolocation) {
            console.error('Geolocation is not supported by your browser.');
            return;
        }

        // Get the initial position
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log('Initial Position:', latitude, longitude); // Debugging
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            },
            (error) => {
                console.error('Error getting initial position:', error); // Debugging
            }
        );

        // Watch for position changes
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log('Updated Position:', latitude, longitude); // Debugging
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            },
            (error) => {
                console.error('Error watching position:', error); // Debugging
            }
        );

        // Cleanup the watchPosition on component unmount
        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            onLoad={() => setIsMapLoaded(true)}
        >
            {isMapLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={currentPosition}
                    zoom={15}
                >
                    {currentPosition && (
                        <Marker position={currentPosition} />
                    )}
                </GoogleMap>
            ) : (
                <div>Loading map...</div>
            )}
        </LoadScript>
    );
};

export default LiveTracking;