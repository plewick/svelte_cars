<script>
	import CreateCar from './templateForm.svelte';
	import ListCars from './templateList.svelte';
</script>

<CreateCar/>
<ListCars/>

<style>
	/* Elementarni classy */
	:global(body){
		padding: 0;
		background-color: #16222b;
		color: #f0e4be;
		font-weight: 100;
	}
	:global(button,.button) {
		-webkit-appearance: none;
		-moz-appearance: none;
		display: inline-block;
		border: none;
		height: auto;
		padding: .5rem 2rem;
		border-radius: 5px;
		text-decoration: none;
		background: #16222b;
		color: #ffffff;
		font-family: sans-serif;
		font-size: 1rem;
		cursor: pointer;
		text-align: center;
		transition: background 250ms ease-in-out, transform 150ms ease;
	}
	
	:global(.button_tiny) {
		padding: .1em .3rem;
	}
	
	:global(.button_red) {
		background: #900;
	}
	:global(.button_red:hover) {
		background: #F66;
	}
	:global(input){
		border: none;
		border-radius: 5px;
	}
	:global(.tac){
		text-align: center;
	}
	:global(.tar){
		text-align: right;
	}
	:global(.relative){
		position: relative;
	}
	:global(.w100){
		width: 100%;
	}
	:global(.p1){
		padding: .5rem;
	}
	:global(.p2){
		padding: 1rem;
	}
	:global(.px2){
		padding-left: 1rem;
		padding-right: 1rem;
	}
	:global(.active){
		background: rgba(0,0,0,.3);
		margin-right: 0.3em;
	}
	:global(.col) {
	  float: left;
	  box-sizing: border-box;
	}
	:global(.col-3) {
	  width: calc(3/12 * 100%);
	}
	:global(.col-4) {
	  width: calc(4/12 * 100%);
	}
	:global(.col-9) {
	  width: calc(9/12 * 100%);
	}
	:global(.cup){
		cursor: pointer;
	}
	:global(.flex){
		display: flex;
		align-items: center;
	}
	:global(.flex-between){
		justify-content: space-between;
	}
	:global(.flex-top){
		align-items: flex-start;
	}
	:global(.inline-block){
		display: inline-block;
	}
	:global(.block){
		display:block;
	}
	:global(.h3){
		font-size: 1.5rem;
		font-weight: 600;
	}
	:global(.mt2){
		margin-top: 1rem;
	}
	/* fancy classy */

	:global(.main_nav a){
		padding: 1rem;
		color: #b6a57d;
		display: block;
	}	
	:global(.main_nav a:hover){
		color: #f0e4be;
	}

	:global(.remove_circle){
		border-radius: 100px;
		width: 1em;
		height: 1em;
		display: block;
		padding: 0;
		line-height: .8em;
		text-align: center;
	}
	:global(.fancy_heading){
		font-size: 2rem;
		background: linear-gradient(168deg, rgba(240,228,190,1) 0%, rgba(130,107,54,1) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	:global(.main_nav){
		margin-top: 1rem;
		border-right: 1px solid #1e3546;
	}
	:global(.carimg){
		padding-top: 2em;
		max-width: 100%;
		max-height: 40vh;
		height: auto;
		width: auto;
	} 
</style>