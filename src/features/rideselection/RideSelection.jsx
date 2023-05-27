import { GrLocation, GrFormSearch } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { TbLeaf, TbLeafOff } from "react-icons/tb";

import { RSTopBar } from './RSTopBar'

const rides=[{driver:"Tim Ruppert", points:"230"}, {driver: "Lukas Stockmann", points:"666"}]

export const RideSelection = (props) => {
    return (
        <>
            <RSTopBar />
            <div style={{width: "100vw", height: "100vh", position: "absolute", paddingTop: "190px",top: "0px", left: "0", zIndex: "600", backgroundColor: "white"}}>
                { rides.map((ride) => { return (
                    <div className="rs-ride">
                        <div style={{backgroundColor: "white", borderRadius: "100vw", height: "3em", aspectRatio: "1/1"}}></div>
                        <div style={{justifySelf: "start"}}><span style={{color: "#4D7143"}}>{ride.driver}</span></div>
                        <div><span style={{color: "#4D7143"}}>{ride.points>500?<TbLeaf/>:<TbLeafOff/>}{ride.points>100?<TbLeaf/>:<TbLeafOff/>}{ride.points>10?<TbLeaf/>:<TbLeafOff/>}</span><span style={{color: "black"}}>{ride.points}</span></div>
                    </div>
                    )})}

            </div>

        </>
    )
}