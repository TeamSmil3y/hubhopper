import { IoIosArrowBack, IoIosArrowRoundForward } from "react-icons/io";
import { GrLocation } from "react-icons/gr";

export const RSTopBar = (props) => {
    return (
        <div id='rs-topbar' style={{ display: "flex", alignItems: "flex-end" }}>
            <div onClick={props.onBack} style={{position: 'absolute', top: "18px", left: '16px', display: "flex", alignItems: "center" }}>
                <IoIosArrowBack
                    style={{ fontSize: '1em', fontFamily: 'Blinker', color: '#5e6163'}}
                />
                <span style={{ fontSize: '1em', fontFamily: 'Blinker', color: '#5E6163FF'}}>Back</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <GrLocation style={{ color: 'black', fontSize: '0.9sem'}} />
                    <span style={{ color: 'black', fontSize: '1em', fontFamily: 'Blinker'}}>{props.from}</span>
                </div>
                <IoIosArrowRoundForward style={{ color: 'black', fontSize: '1.3em'}}/>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <GrLocation style={{ color: 'black', fontSize: '0.9sem'}} />
                    <span style={{ color: 'black', fontSize: '1em', fontFamily: 'Blinker'}}>{props.to}</span>
                </div>
            </div>
        </div>
    )
}
