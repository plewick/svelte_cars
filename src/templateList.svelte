<script>
	import { Router, Route, Link } from "svelte-navigator";
	import {carList,carListPreParsed} from './stores.js';
	function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
		const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
		if (isActive) {
		  return { class: "active" };
		}
		return {};
	}
	const remove = function(item){
		$carList = $carList.filter((value) => value.id !== item.id);
		$carListPreParsed = JSON.stringify($carList)
	}
</script>

<Router>
	<div class="flex flex-top ">
		<div class="list col-3">
			<nav class="main_nav p1">
			{#if $carList.length}
				<div class="h3 p2">
					Výběr vozidla
				</div>
				{#each $carList as car, index (index)}
				<div class="flex flex-between">
					<Link to="/{car.id}/" getProps="{getProps}">{car.make} {car.model}</Link>
					<div class="remove remove_circle button_red button_tiny cup" on:click="{() => remove(car)}">	&#215;</div>
				</div>
				{/each}
			{/if}
			</nav>
		</div>
		<div class="col col-9 p2">
			{#if $carList.length}
			{#each $carList as car}
			<Route path="/{car.id}/">
				<div class="page relative tac w100">
					<div class="inner" >
						<div class="block w100 tar delete_button">
							<div class="remove button button_red cup p1 mt2" on:click="{() => remove(car)}">	
								SMAZAT
							</div>
						</div>
						<h3 class="fancy_heading inline-block">{car.make} {car.model}</h3>
						<div class="block">Rok výroby: {car.year}</div>
						{#if car.image}
							<img src="{car.image}" class="carimg" alt="{car.make} {car.model}">				
						{/if}
					</div>
				</div>
			</Route>
			{/each}
			{/if}
		</div>
	</div>
</Router>