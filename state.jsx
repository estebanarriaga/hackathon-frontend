import { proxy } from "valtio";

const state = proxy({
	isLoggedIn: true,
	file: 'covid_19.glb',
});

export default state;