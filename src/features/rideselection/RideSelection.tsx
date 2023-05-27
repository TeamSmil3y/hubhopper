import { useNavigate } from "react-router-dom";
import { GrLocation, GrFormSearch } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { TbLeaf, TbLeafOff } from "react-icons/tb";

import { RSTopBar } from './RSTopBar'
import {find_rides, create_ride} from "../api/api.jsx";
import {useQuery, useMutation} from "react-query";
import {useRecoilValue, useRecoilState, useResetRecoilState} from "recoil";
import {passengerFlowState, queryClient, lobbyState as lobbyState$} from "../../state";
import {Lobby} from "./Lobby";

import noRides from "../../assets/noRides.png"

export type Ride = {
  id: string,
  points: number,
  driver: string,
}

export const RideSelection = () => {
  const navigate = useNavigate();
  const passengerFlow = useRecoilValue(passengerFlowState)
  const [lobbyState, setLobbyState] = useRecoilState(lobbyState$)
  const resetLobby = useResetRecoilState(lobbyState$)

  if (!(passengerFlow.destination && passengerFlow.departure)) {
    navigate('/')
  }

    const data = useQuery({
      queryKey: 'rides',
      queryFn: () => find_rides(passengerFlow.destination.id, passengerFlow.departure.id),
      enabled: Boolean(passengerFlow.destination && passengerFlow.departure),
      keepPreviousData: true,
    })
  const { mutate: createRide} = useMutation<unknown, unknown, { destination_hub_id: string, source_hub_id: string }>({
    mutationKey: 'rides',
    mutationFn: (vars) => create_ride(vars),
    onSuccess: (data: Ride) => {
      queryClient.invalidateQueries({ queryKey: ['rides'] })
      selectRide({
        ...data,
        driver: "You"
      }, true)
    },
  })

  const selectRide = (ride: Ride, owner = false) => {
    const data = {
      driver: ride.driver,
      destination: passengerFlow.destination.address,
      owner,
      rideId: ride.id
    }
    console.log('----', data)
    setLobbyState(data)
  }

    return (
        <div style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          paddingTop: "190px",
          top: "0px",
          left: "0",
          zIndex: "600",
          backgroundColor: "white",
          color: '#000'
        }}>
            <RSTopBar
              onBack={() => {
                if (lobbyState.driver !== "") {
                  return resetLobby();
                }
                navigate('/')
              }}
              from={passengerFlow.departure?.address}
              to={passengerFlow.destination?.address}
            />
          {lobbyState.driver !== "" && (
            <Lobby {...lobbyState} />
          )}
          {lobbyState.driver === '' && (
            <div>
              {data.status !== "success" && (
                <div>loading</div>
              )}
              {(data.status === "success" && data.data.length === 0) && (
                <div>
                  <img width={200} height={200} src={noRides}/>
                </div>
              )}
              {data.status === "success" && (data.data as Ride[]).map((ride) => (
                <div className="rs-ride" key={ride.id} onClick={() => selectRide(ride)}>
                  <div style={{backgroundColor: "white", borderRadius: "100vw", height: "3em", aspectRatio: "1/1"}}></div>
                  <div style={{justifySelf: "start"}}><span style={{color: "#4D7143"}}>{ride.driver}</span></div>
                  <div><span style={{color: "#4D7143"}}>{ride.points>500?<TbLeaf/>:<TbLeafOff/>}{ride.points>100?<TbLeaf/>:<TbLeafOff/>}{ride.points>10?<TbLeaf/>:<TbLeafOff/>}</span><span style={{color: "black"}}>{ride.points}</span></div>
                </div>
              ))}
              <button
                className="create-ride-button"
                onClick={() => createRide({
                  destination_hub_id: passengerFlow.destination.id,
                  source_hub_id: passengerFlow.departure.id,
                })}
              >Create ride</button>
            </div>
          )}

        </div>
    )
}
