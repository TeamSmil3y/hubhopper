import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import { TopBar } from '../features/topbar/TopBar'
import { RideSelection } from '../features/rideselection/RideSelection'
import {Hub, Map} from "../features/map/Map";

import {passengerFlowState, queryClient} from "../state";


export const Rides = () => {
    const [passengerFlow, setPassengerState] = useRecoilState(passengerFlowState)
    // console.log(queryClient.getQueryData('hubs'))

    const [selection, setSelection] = useState<"source" | "destination">("destination")

    const onSelect = (hub: Hub) => {
      if (selection === "destination") {
        setPassengerState((state) => ({...state, destination: hub }))
        setSelection('source')
        return
      }
      if (selection === "source") {
        setPassengerState((state) => ({...state, departure: hub }))
        console.log('ready to go for next step')
        return
      }
    }

    return (
        <>
            {/*<RideSelection />*/}
            <TopBar
              select={selection}
              destination_hub="Hubby hub"
              onGoBack={() => setSelection("destination")}
            />
            <Map
              hubs={queryClient.getQueryData('hubs') || []}
              onMarkerClick={onSelect}
            />
        </>
    )
}
