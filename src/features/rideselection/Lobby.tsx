import { useQuery, useMutation } from "react-query";
import {join_request, update} from "../api/api";
import {passengerFlowState, queryClient} from "../../state";
import {useRecoilValue} from "recoil";

type Props = {
	driver: string,
	destination: string,
	owner: boolean,
	rideId: string
}

export const Lobby = ({ driver, destination, owner, rideId }: Props) => {
	const passengerFlow = useRecoilValue(passengerFlowState)
	const events = useQuery({
		queryKey: 'lobbyEvents',
		queryFn: update,
		refetchInterval: 500
	})
	const { mutate: requestJoin } = useMutation<unknown, unknown, { ride_id: string, source_hub_id: string }>({
		mutationKey: 'rides',
		mutationFn: (vars) => join_request(vars),
		onSuccess: (data) => {
			// queryClient.invalidateQueries({ queryKey: ['rides'] })

		},
	})

	if (events.status === 'success') {
		console.log(events.data)
	}


	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "start", padding: "30px", paddingTop: 0 }}>
			<p>Destination: {destination}</p>
			<p>Driver name: {driver}</p>
			{!owner && (
				<button onClick={() => requestJoin({
					ride_id: rideId,
					source_hub_id: passengerFlow.departure.id
				})}>
					Request to join
				</button>
			)}
		</div>
	)
}
