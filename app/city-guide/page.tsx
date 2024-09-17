"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { LatLngExpression, LatLngTuple } from "leaflet";

export default function CityGuide() {
  const geocodeAddress = async (address: string): Promise<LatLngTuple | null> => {
    const formattedAddress = encodeURIComponent(address);
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${formattedAddress}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        return [parseFloat(lat), parseFloat(lon)];
      } else {
        console.error("No coordinates found for address");
        return null;
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  };

  // State to hold the resolved locations
  const [locations, setLocations] = useState<
    { name: string; address: string; posix: LatLngTuple | null }[]
  >([]);

  // Fetch and update locations when the component is mounted
  useEffect(() => {
    const fetchLocations = async () => {
      const locationData = [
        {
          name: "Pastaciutta - pasta and drinks",
          address: "Magdalenastraat 15, 8500 Kortrijk",
        },
        {
          name: "Pastaciutta - pasta and drinks",
          address: "Lange-Steenstraat 5, 8500 Kortrijk",
        },
        {
          name: "Wafel atelier",
          address: "Grote Kring 7, 8500 Kortrijk",
        },
        {
          name: "Kaffee Renée",
          address: "Lange-Steenstraat 32, 8500 Kortrijk",
        },
      ];

      // Geocode all addresses and store them in state
      const updatedLocations = await Promise.all(
        locationData.map(async (location) => {
          const posix = await geocodeAddress(location.address);
          return { ...location, posix };
        })
      );

      setLocations(updatedLocations);
    };

    fetchLocations();
  }, []);

  // Dynamically import the Map component with SSR disabled
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map/"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const [mapLocation, setMapLocation] = useState<LatLngExpression | LatLngTuple>([
    50.8241483823092,
    3.2513592389024155,
  ]);
  const [mapAddress, setMapAddress] = useState<string>("Botenkopersstraat 2, 8500 Kortrijk");
  const [mapName, setMapName] = useState<string>("Howest Penta");

  // Function to change the map view
  const changeMap = (location: { name: string; address: string; posix: LatLngTuple | null }) => {
    if (location.posix) {
      setMapLocation(location.posix);
      setMapAddress(location.address);
      setMapName(location.name);
    } else {
      console.error("No coordinates available for this location");
    }
  };

  return (
    <div className="flex sm:flex-row flex-col gap-2 w-4/5 pt-4 m-auto overflow-hidden">
        <h1 className="font-bold text-2xl">City Guide</h1>
      <div className="sm:w-1/2 w-full flex gap-2 flex-col max-h-80 sm:max-h-[36rem] overflow-y-scroll">
        {locations.map((location, index) => (
          <div key={index} className="bg-white-700 p-2 flex flex-col gap-2">
            <h2 className="font-bold text-l">{location.name}</h2>
            <p>{location.address}</p>
            <button className="bg-esn-magenta rounded-md font-bold text-white p-2 w-1/2 align-right" onClick={() => changeMap(location)}>Show on map</button>
          </div>
        ))}
      </div>
      <div className="bg-white-700 mx-auto my-5 sm:w-1/2 w-full h-96 sm:h-[480px]">
        <Map posix={mapLocation as LatLngExpression | LatLngTuple} name={mapName} address={mapAddress} />
      </div>
    </div>
  );
}
