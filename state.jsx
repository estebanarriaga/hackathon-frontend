import { proxy } from "valtio";

const state = proxy({
	isLoggedIn: true,
	file: 'human.glb',
});

export default state;