<script>

	import Header from "./header/Main.svelte"
	import Content from "./content/Main.svelte"
	
	import { onMount } from "svelte";
	import { getData, getDisplayedData, groupByKey, reduceByKey, timeout } from './helpers.js'
    import { createUpdateRowState } from "./state";

	export let editSettings = {}
	export let component = {}
	export let columns = []
	export let dataSource = []
	export let onEvent = () => {}
	export let treeColumnIndex = 0

	let searchString = ''
	let isAllExpanded = false
	let isAllCollapsed = false

	$: dataSourceById = reduceByKey(dataSource, 'id')
	$: data = getData(Object.values(dataSourceById).filter((val) => val), columns)
	$: displayedData = getDisplayedData(data, searchString)
	$: elementsByParent = groupByKey(displayedData, 'parent')

	const updateRowState = createUpdateRowState()

	const updateRowData = (id, newData) => {

		const rowData = dataSourceById[id]

		if (!rowData) {
			return
		}

		dataSourceById[id] = { ...rowData, ...newData, id }
	}

	const deleteRow = (id) => {
		dataSourceById[id] = null
	}


	onMount(async () => {

		await timeout(100)

		component = {
			async expandAll () {
				isAllExpanded = true
				await timeout(100)
				isAllExpanded = false
			},

			async collapseAll () {
				isAllCollapsed = true
				await timeout(100)
				isAllCollapsed = false
			},
		}
	})

</script>

<div class="grid">

	<Header bind:searchString {component} />
	<Content
		{updateRowData}
		{deleteRow}
		{onEvent}
		{columns}
		{isAllCollapsed}
		{isAllExpanded}
		{editSettings}
		{updateRowState}
		{treeColumnIndex}
		{elementsByParent}
	/>

</div>

<style>

	.grid {
		--border-color: rgb(153, 150, 157);

		background-color: #fff;
		flex-direction: column;
		display: flex;
		height: 100%;
		min-height: 65px;
		color: rgb(81, 81, 87);
		border: 1px solid var(--border-color);
	}

	.grid :global(input){
		background-color: #f1f1f8;
		width: 100%;
		font-size: 10px;
		border-radius: 5px;
		padding: 5px 7.5px;
		border: 1px solid var(--border-color);
	}

	.grid :global(button){
		background-color: transparent;
		place-content: center;
		display: grid;
		border: none;
		padding: 0px;
		font-size: 12px;
		font-weight: 600;
		color: rgba(0, 0, 0, .8);
	}

	.grid :global(.row) {
		display: grid;
		width: 100%;
		padding: 15px;
		grid-gap: 15px;
		font-size: 11px;
		border-bottom: 1px solid var(--border-color);
	}


</style>
