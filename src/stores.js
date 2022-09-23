import { writable } from 'svelte/store';
const storedVals = localStorage.getItem("list") ? localStorage.getItem("list") : "[]";
const parsedVals = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : {};

export const carList = writable(parsedVals);
export const carListPreParsed = writable(storedVals);

carList.subscribe(value => {
	JSON.parse(localStorage.getItem("list"))
});
carListPreParsed.subscribe(value => {
	localStorage.setItem("list",value);
});