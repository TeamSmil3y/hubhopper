import { useState, useEffect, PropsWithChildren } from "react";
import * as L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import { v4 as uuid } from 'uuid'
import hubIcon$ from '../../assets/hub.svg'

const hubIcon = L.icon({
  iconUrl: hubIcon$,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  // popupAnchor: [-3, -76],
  // shadowUrl: 'my-icon-shadow.png',
  // shadowSize: [68, 95],
  // shadowAnchor: [22, 94]
});

const getLocation = (): Promise<Loc> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          const loc: Loc = [position.coords.latitude, position.coords.longitude];
          resolve(loc);
        },
    (error) => {
        reject(error);
      }
    );
  });
};

type Loc = [number, number]
export type Hub = {
  loc: Loc,
  address: string,
  id: string,
  // type: 'official' | 'community'
}

type Props = {
  hubs?: Hub[],
  cars?: null[],
  onMarkerClick: (hub: Hub) => void
}

export const Map = (props: Props) => {
  return (
    <MapContainer center={[0, 0]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapContent {...props} />
    </MapContainer>
  )
}

const MapContent = ({ hubs, onMarkerClick }: Props) => {
  const map = useMap();
  const [currentLocation, setLocation] = useState<Loc>([0, 0])

  useEffect(() => {
    const asyncWrapper = async () => {
      const location = await getLocation();
      setLocation(location)
      map.setView({ lat: location[0], lng: location[1]})
    }
    asyncWrapper()
  }, [])

  // useEffect(() => {
  //   if (!map.current) return;
  //
  //   // TODO: clear map
  //
  //   if (hubs) {
  //     hubs.forEach((hub) => {
  //       // console.log(hub)
  //       const config = getHubConfig(hub);
  //       // TODO: save ID
  //       console.log(config)
  //       map.current?.on('load', () => {
  //         map.current?.addLayer(config)
  //       })
  //     })
  //   }
  //
  // }, [hubs, cars])

  return (
    <div>
      {/*<Marker*/}
      {/*  key={currentLocation}*/}
      {/*  position={currentLocation}*/}
      {/*  icon={hubIcon}*/}
      {/*  eventHandlers={{*/}
      {/*    click: () => console.log('clicked')*/}
      {/*  }}*/}
      {/*></Marker>*/}
      {hubs?.map((hub) => (
        <Marker
          key={hub.loc}
          position={new L.LatLng(hub.loc[0], hub.loc[1])}
          icon={hubIcon}
          eventHandlers={{
            click: () => onMarkerClick(hub)
          }}
        ></Marker>
      ))}
    </div>
  )
}
