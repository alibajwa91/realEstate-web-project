import React, { useEffect } from "react";
import "./googlemap.css";

const GoogleMap = () => {
  useEffect(() => {
    // Paste the JavaScript code here

    // This script loads the Google Maps JavaScript API.
    // Make sure to replace 'YOUR_API_KEY' with your actual API key.
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=bjsbiedyedwiebywbdkahyiwdawubdusbjkca432&callback=initMap`;
    script.defer = true;
    document.head.appendChild(script);

    // Define the initMap function to initialize the map
    window.initMap = () => {
      const markerPositions = [
        { lat: 43.69441, lng: -79.37381 },
        { lat: 43.70681, lng: -79.37098 },
      ];
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: { lat: 43.65107, lng: -79.347015 },
        mapId: "AMB_RealEstate",
      });

      markerPositions.forEach((position) => {
        // eslint-disable-next-line no-unused-vars
        const marker = new window.google.maps.Marker({
          position: position,
          map: map,
          title: "AMB-RealEstate Listings",
        });
      });
    };
  }, []);

  return (
    <div>
      <h3>Map Of Available Properties</h3>
      <div id="map"></div>
    </div>
  );
};

export default GoogleMap;
