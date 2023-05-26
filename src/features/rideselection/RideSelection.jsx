import { GrLocation, GrFormSearch } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { FiClock } from "react-icons/fi";

import { RSTopBar } from './RSTopBar'

export const RideSelection = (props) => {
    return (
        <>
            <RSTopBar />
            <div style={{width: "100vw", height: "100vh", position: "absolute", top: "0", left: "0", zIndex: "600", backgroundColor: "white"}}></div>
        </>
    )
}