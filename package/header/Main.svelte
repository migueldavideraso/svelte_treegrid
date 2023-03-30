
<script>

	import CloseIcon from '../icons/close.svelte'
	import SearchIcon from '../icons/search.svelte'

	export let component = {}
	export let searchString = ''

	let inputValue = ''

	const search = () => {
		searchString = inputValue
	}

	const cancelSearch = () => {
		inputValue = ''
		searchString = ''
	}

</script>


<section class="grid-header">

	<button on:click={() => component.collapseAll()}> Collapse All </button>
	<button on:click={() => component.expandAll()}> Expand All </button>

	<span class="flex"/>

	<div class="search_container">
		<input type="text" bind:value={inputValue} />
		<button on:click={search}>
			<SearchIcon />
		</button>
		<button on:click={cancelSearch}>
			<CloseIcon />
		</button>
	</div>

</section>


<style>

	.grid-header {
		background-color: #f9f9f9;
		align-items: center;
		flex-wrap: wrap;
		display: flex;
		flex: auto;
		padding: 10px;
		grid-gap: 10px;
		min-height: 50px;
		border-bottom: 1px solid var(--border-color);
	}

	.flex {
		flex: auto;
	}

	.search_container {
		align-items: center;
		display: flex;
		grid-gap: 5px;
		min-width: min(150px, 100%);
	}

</style>
