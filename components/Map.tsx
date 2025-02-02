"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";
import { useEffect, useRef } from "react";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  name: string;
  address: string;
  zoom?: number;
}

const defaults = {
  zoom: 18,
};

const MapUpdater = ({ posix, zoom }: { posix: LatLngExpression, zoom: number }) => {
  const map = useMap();
  const previousPosix = useRef<LatLngExpression | null>(null); // Track previous location

  useEffect(() => {
    if (previousPosix.current && previousPosix.current !== posix) {
      // Only fly if the position (posix) changes
      map.flyTo(posix, zoom, { animate: true, duration: 1.5 });
    } else {
      // Just set the view if it's the initial load or the position hasn't changed
      map.setView(posix, zoom);
    }

    // Update the previous position to the current one
    previousPosix.current = posix;
  }, [posix, zoom, map]);

  return null; // This component doesn't render anything, just updates the map
};

const Map = (Map: MapProps) => {
  const { zoom = defaults.zoom, posix, name, address } = Map;

  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", borderRadius: "inherit", boxShadow:"inherit" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={posix} draggable={false}>
        <Popup>
          {name} <br /> {address}
        </Popup>
      </Marker>
      <MapUpdater posix={posix} zoom={zoom} /> {/* This ensures the map flies only on location change */}
    </MapContainer>
  );
};

export default Map;
