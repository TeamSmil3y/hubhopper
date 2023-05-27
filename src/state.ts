import { atom } from "recoil";
import {QueryClient} from "react-query";
import {Hub} from "./features/map/Map";

export const queryClient = new QueryClient()

export const passengerFlowState = atom<{
	departure: null | Hub,
	destination: null | Hub,
}>({
	key: 'passengerFlowState',
	default: {
		departure: null,
		destination: null,
	},
});

export const lobbyState = atom({
	key: 'lobbyKey',
	default: {
		driver: "",
		destination: "",
		owner: false,
	},
})
