import { IoIosArrowBack, IoIosArrowRoundForward } from "react-icons/io";
import { GrLocation } from "react-icons/gr";

export const RSTopBar = (props) => {
    return (
        <div id='rs-topbar'>
            <IoIosArrowBack style={{position: 'absolute', top: "50px", left: '20px', fontSize: '1em', fontFamily: 'Blinker', color: '#B9BCBE'}} />
            <span style={{position: 'absolute', top: "50px", left: '40px', fontSize: '1em', fontFamily: 'Blinker', color: '#B9BCBE'}}>Back</span>
            <GrLocation style={{position: 'absolute', top: "130px", left: '20px', color: 'black', fontSize: '2em'}}/>
            <IoIosArrowRoundForward style={{position: 'absolute', top: "130px", left: '50%', color: 'black', fontSize: '2em'}}/>
            <span style={{position: 'absolute', top: "135px", left: '60px', color: 'black', fontSize: '1em', fontFamily: 'Blinker'}}>{props.from}</span>
            <span style={{position: 'absolute', top: "135px", left: '260px', color: 'black', fontSize: '1em', fontFamily: 'Blinker'}}>{props.to}</span>
            {/* props.rides.map((ride) => {
                <div style={{}}> </div>
            }) */}
        </div>
    )
}