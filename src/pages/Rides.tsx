import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Routes, Route, useNavigate } from 'react-router-dom';

import { TopBar } from '../features/topbar/TopBar'
import { RideSelection } from '../features/rideselection/RideSelection'
import {Hub, Map} from "../features/map/Map";

import {passengerFlowState, queryClient} from "../state";


export const Rides = () => {
  const navigate = useNavigate();
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
        navigate('/rides')
        return
      }
    }

    return (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <TopBar
                select={selection}
                destination_hub="Hubby hub"
                onGoBack={() => setSelection("destination")}
                />
              }
            />
            <Route path="rides" element={<RideSelection />} />
            <Route path="lobby" element={<RideSelection />} />
          </Routes>
            <Map
              hubs={queryClient.getQueryData('hubs') || []}
              onMarkerClick={onSelect}
            />
        </>
    )
}
