import { useRecoilValue } from "recoil";
import { GrLocation, GrFormSearch } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import {passengerFlowState} from "../../state";

export const TopBar = (props) => {
    const passengerFlow = useRecoilValue(passengerFlowState)

    let today = new Date();

    // TODO: autocomplete
    if(props.select==='destination') return (
        // rendering for selecting destination
        <div id="topbar">
            <span id='destination-search'>Search</span>
            <GrLocation id='destination-img-location' />
            <input readOnly id='destination-input' placeholder="Destination Hub" value={passengerFlow.destination?.address}/>
        </div>
    )
    else if(props.select==='source') return (
        // rendering for selecting source
        <div id="topbar">
            <IoIosArrowBack id='source-backbtn' onClick={props.onGoBack} />
            <span id='source-destinfo'><span>Destination Hub: {props.destination_hub}</span><span><FiClock style={{transform: 'translateY(0.17em)', color: '#B9BCBE', marginRight: '0.2em'}} />{today.getHours() + ":" + today.getMinutes()}</span></span>
            <GrFormSearch id='source-img-lens' />
            <input readOnly id='source-input' placeholder="Search Start Hub" value={passengerFlow.departure?.address} />
        </div>
    )
}
