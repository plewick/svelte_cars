<script>
	import { navigate } from "svelte-navigator";
	import { goto } from '$app/navigation';
	import {carConstructor} from './constructorCar.js';
	import { carList,carListPreParsed } from './stores.js';
	let values = {}
	let report = false;
	let image;

	const onFileSelected =(e)=>{
		image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
			values.image = e.target.result
			console.log(values.image)
        };
	}
	function handleOnSubmit(){
		let id = Math.floor(Math.random() * 99999) //představte si, že se tady kontroluje unikátnost
		let newCar = new carConstructor(values.make,values.model,values.year,id,values.image);
		let temp = JSON.parse($carListPreParsed)

		temp.push(newCar)
		$carList = temp;
		$carListPreParsed = JSON.stringify(temp)
		values = {}
		report = "Záznam přidán..."
		navigate("/"+newCar.id+"/");
	}
	function onFocus(){
		report = "";
	}
</script>

<form class="inputForm" on:submit|preventDefault={handleOnSubmit}>
	<div class="h3 p2">Přidat káru</div>
	<div class="flex">
		<div class="px2">
			<label for="make">Značka</label>
			<input type="text" id="make" required on:focus={onFocus} bind:value={values.make}>	
		</div>
		<div class="px2">
			<label for="model">Model</label>
			<input type="text" id="model" required on:focus={onFocus} bind:value={values.model}>	
		</div>
		<div class="px2">
			<label for="year">Rok výroby</label>
			<input type="number" id="year" required on:focus={onFocus} bind:value={values.year}>
		</div>
	</div>
	<div class="p2 ">
		<label for="year" class="block">Obrázek auta</label>
		<input type="file" on:change={(e)=>onFileSelected(e)} on:focus={onFocus} bind:value={values.files}>
	</div>
	<div class="submit p1 px2">
		<button type="submit" class="inline-block">
			Vložit
		</button>
		{#if report}
			<div class="report inline-block">
				{report}
			</div>
		{/if}
	</div>
</form>

<style>
	label{
		margin-bottom: 0.3em;
	}
	input[type=file]{
		padding-left: 0;
		padding-bottom: 0;
	}
	.inputForm{
		background-color: #d6d8df;
		box-shadow: 0 0 15px rgba(0,0,0,.2);
		color: #16222b;
	}
	.report{
		vertical-align: middle;
		border-radius: 5px;

	}
	.submit {
		background-color: #9da3a8;
	}
	.submit button{
		margin-bottom: 0;
	}
</style>