"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { LatLngExpression, LatLngTuple } from "leaflet";

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  name: string;
  address: string;
}


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
    { category: string; businesses: { name: string; address: string; }[]; }[]
  >([]);

  // Fetch and update locations when the component is mounted
  useEffect(() => {
    const locationData = [
      {
        category: "Restaurants and Cafes",
        businesses: [
          {
            name: "Pastaciutta - pasta and drinks",
            address: "Magdalenastraat 15, 8500 Kortrijk"
          },
          {
            name: "Pastaciutta - pasta and drinks",
            address: "Lange-Steenstraat 5, 8500 Kortrijk"
          },
          {
            name: "Waffles atelier",
            address: "Grote Kring 7, 8500 Kortrijk"
          },
          {
            name: "Cafe Rene",
            address: "Lange-Steenstraat 32, 8500 Kortrijk"
          },
          {
            name: "Buda kitchen",
            address: "Budastraat 52, 8500 Kortrijk"
          },
          {
            name: "Pitta Pyramide",
            address: "O.-L.-Vrouwestraat 28, 8500 Kortrijk"
          },
          {
            name: "City snack",
            address: "Stationsplein 5, 8500 Kortrijk"
          },
          {
            name: "Pitta house",
            address: "Burgemeester Reynaertstraat 10, 8500 Kortrijk"
          },
          {
            name: "Frederick's",
            address: "Lange-Steenstraat 23, 8500 Kortrijk"
          },
          {
            name: "Thelma and Louise",
            address: "Burgemeester Reynaertstraat 8, 8500 Kortrijk"
          },
          {
            name: "French Tacos",
            address: "Leiestraat 4, 8500 Kortrijk"
          },
          {
            name: "Poke Bowl",
            address: "Grote Markt 53, 8500 Kortrijk"
          }
        ]
      },
      {
        category: "Dentist",
        businesses: [
          {
            name: "Claeys Veronique",
            address: "Burgemeester Gillonlaan 40, 8500 Kortrijk"
          }
        ]
      },
      {
        category: "Pharmacies",
        businesses: [
          {
            name: "Apotheek Meensepoort",
            address: "Meensesteenweg 26, 8500 Kortrijk"
          },
          {
            name: "Crocodile",
            address: "Grote Markt 5, 8500 Kortrijk"
          }
        ]
      },
      {
        category: "Laundry",
        businesses: [
          {
            name: "Wassalon",
            address: "Rijselsestraat 50, 8500 Kortrijk"
          },
          {
            name: "Comfort Wash",
            address: "Sint-Denijsestraat 4, 8500 Kortrijk"
          },
          {
            name: "Wassalon",
            address: "Brugsesteenweg 221, 8500 Kortrijk"
          }
        ]
      },
      {
        category: "Stores",
        businesses: [
          {
            name: "Colruyt",
            address: "Sint-Sebastiaanslaan 2, 8500 Kortrijk"
          },
          {
            name: "Aldi",
            address: "Engelse Wandeling 2/L2, 8500 Kortrijk"
          },
          {
            name: "Aldi",
            address: "Sint-Denijsestraat 103, 8500 Kortrijk"
          },
          {
            name: "Lidl",
            address: "Sint-Sebastiaanslaan 1, 8500 Kortrijk"
          },
          {
            name: "Delhaize",
            address: "Steenpoort 2, 8500 Kortrijk"
          },
          {
            name: "Carrefour",
            address: "Leiestraat 12, 8500 Kortrijk"
          },
          {
            name: "Action",
            address: "Steenpoort 2/B, 8500 Kortrijk"
          },
          {
            name: "Kruidvat",
            address: "Lange-Steenstraat 26/28, 8500 Kortrijk"
          }
        ]
      },
      {
        category: "Second-hand Stores",
        businesses: [
          {
            name: "de kringwinkel",
            address: "Gentsesteenweg 176, 8500 Kortrijk"
          }
        ]
      }
    ];

    setLocations(locationData);
  }, []);

  // Dynamically import the Map component with SSR disabled and proper typing
  const Map = useMemo(
    () =>
      dynamic<React.ComponentProps<typeof import("@/components/Map").default>>(
        () => import("@/components/Map"),
        {
          loading: () => <p>A map is loading</p>,
          ssr: false,
        }
      ),
    []
  );

  const [mapLocation, setMapLocation] = useState<LatLngExpression | LatLngTuple>([
    50.8241483823092,
    3.2513592389024155,
  ]);
  const [mapAddress, setMapAddress] = useState<string>("Botenkopersstraat 2, 8500 Kortrijk");
  const [mapName, setMapName] = useState<string>("Howest Penta");

  // Function to change the map view
  const changeMap = (location: { name: string; address: string; posix?: LatLngTuple | null }) => {
    // If the location already has coordinates (posix), use them.
    if (location.posix) {
      setMapLocation(location.posix);
      setMapAddress(location.address);
      setMapName(location.name);
    } else {
      // Otherwise, fetch the coordinates asynchronously.
      geocodeAndSetLocation(location);
    }
  };
  
  // Separate async function to fetch the coordinates and update state
  const geocodeAndSetLocation = async (location: { name: string; address: string }) => {
    const posix = await geocodeAddress(location.address);
  
    if (posix) {
      setMapLocation(posix); // Set the location only after fetching the coordinates
      setMapAddress(location.address);
      setMapName(location.name);
    } else {
      console.error("No coordinates available for this location");
    }
  };

  return (
    <div className="flex sm:col-row flex-col gap-2 w-4/5 pt-4 m-auto overflow-hidden">
      <h1 className="font-bold text-2xl">City Guide</h1>
      <div className="flex">
        <div className="sm:w-1/2 w-full flex gap-2 flex-col max-h-80 sm:max-h-[36rem] overflow-y-scroll">
          {locations.map((category, catIndex) => (
            <div key={catIndex}>
              <h1 className="font-bold text-xl">{category.category}</h1>
              {category.businesses.map((location, index) => (
                <div key={index} className="bg-white-700 p-2 flex flex-col gap-2">
                  <h2 className="font-bold text-l">{location.name}</h2>
                  <p>{location.address}</p>
                  <button
                    className="bg-esn-magenta rounded-md font-bold text-white p-2 w-1/2 align-right"
                    onClick={() => changeMap(location)}
                  >
                    Show on map
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="bg-white-700 mx-auto my-5 sm:w-1/2 w-full h-96 sm:h-[480px]">
          <Map
            posix={mapLocation as LatLngExpression | LatLngTuple}
            name={mapName}
            address={mapAddress}
          />
        </div>
      </div>
    </div>
  );
}
