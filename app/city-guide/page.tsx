"use client"

import dynamic from 'next/dynamic';
import { useMemo, useState} from 'react';
import { LatLngExpression, LatLngTuple } from 'leaflet';


export default function CityGuide() {
    const locations: {
        name: string;
        address: string;
        posix: [number, number];
    }[] = [];

    locations.push({
        name: 'Howest Penta',
        address: 'Botenkopersstraat 2, 8500 Kortrijk',
        posix: [50.8241483823092, 3.2513592389024155]
    }, {
        name: 'K in Kortrijk',
        address: 'Korte Steenstraat 19, 8500 Kortrijk',
        posix: [50.8263522,3.2635317]
    });

    const Map = useMemo(() => dynamic(
        () => import('@/components/Map/'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    const [mapLocation, setMapLocation] = useState<LatLngExpression | LatLngTuple>([50.8241483823092, 3.2513592389024155]);
    const [mapAddress, setMapAddress] = useState<string>('Botenkopersstraat 2, 8500 Kortrijk');
    const [mapName, setMapName] = useState<string>('Howest Penta');


const changeMap = (location: { name: any; address: any; posix: any; }) => {
    setMapLocation(location.posix);
    setMapAddress(location.address);
    setMapName(location.name);
}

    return (
        <div className='flex sm:flex-row flex-col gap-2 w-4/5 m-auto'>
            <div className='w-1/2 flex gap-2 flex-col'>
                <h1>City Guide</h1>
                {
                    locations.map((location, index) => (
                        <div key={index} className='bg-white-700 p-2 flex flex-col gap-2'>
                            <h2>{location.name}</h2>
                            <p>{location.address}</p>
                            <button onClick={() => changeMap(location)}>Show on map</button>
                        </div>
                    ))
                }
            </div>
            <div className="bg-white-700 mx-auto my-5 sm:w-1/2 w-full h-[480px]">
                <Map posix={mapLocation as LatLngExpression | LatLngTuple} name={mapName} address={mapAddress} />
            </div>
        </div>
    );
}