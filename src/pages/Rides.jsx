import { TopBar } from '../features/topbar/TopBar'
import { RideSelection } from '../features/rideselection/RideSelection'


export const Rides = (props) => {

    return (
        <>
            <RideSelection rides={[{driver:"Tim Ruppert", points:"230"}, {driver: "Lukas Stockmann", points:"666"}]} />
            <TopBar select="source" destination_hub="Hubby hub" />
        </>
    )
}
