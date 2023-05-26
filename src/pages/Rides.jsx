import { TopBar } from '../features/topbar/TopBar'
import { RideSelection } from '../features/rideselection/RideSelection'


export const Rides = (props) => {
    
    return (
        <>
            <RideSelection />
            <TopBar select="source" destination_hub="Hubby hub" />
        </>
    )
}
