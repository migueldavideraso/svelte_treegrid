
<script>

    import { timeout } from "../helpers";
	import Cell from "./Cell.svelte"

	export let onEvent = (e) => {}
	export let updateRowState = {}
	export let editSettings = {}
	export let rowData = {}
	export let columns = []
	export let rowStyle = ''
	export let treeColumnIndex = 0
	export let moveCollapseCell = 0
	export let elementsByParent = {}
	export let isAllCollapsed = false
	export let isAllExpanded = false

	let isCollapsed = false
	let rowElement = null

	$: children = elementsByParent[rowData.id] || []

	$: if (rowElement && rowData.id) {
		createdCellEvent()
	}

	const createdCellEvent = async () => {
		await timeout(100)

		onEvent({
			type: 'row_created',
			rowElement,
			rowData,
		})
	}

	const handleOpenUpdateRow = () => {

		if (editSettings.allowEdit) {
			updateRowState.open({ rowData, rowElement })
		}
	}

	$: if (isAllExpanded) {
		isCollapsed = false
	}

	$: if (isAllCollapsed) {
		isCollapsed = true
	}

</script>


<div
	class="row"
	style={rowStyle}
	bind:this={rowElement}
	on:dblclick={handleOpenUpdateRow}
>

	{#each columns as column, index (column.field)}
		<Cell
			{onEvent}
			{rowData}
			{column}
			bind:isCollapsed
			{moveCollapseCell}
			value={rowData[column.field] || ''}
			isCollapseCell={treeColumnIndex === index}
			hasCollapseButton={children.length && treeColumnIndex === index}
		/>
	{/each}
</div>


{#if children.length && !isCollapsed }

	{#each children as rowData (rowData.id)}
		<svelte:self
			{onEvent}
			{rowData}
			{columns}
			{rowStyle}
			{editSettings}
			{updateRowState}
			{treeColumnIndex}
			{elementsByParent}
			moveCollapseCell={moveCollapseCell + 5}
		/>

	{/each}

{/if}



<style>

	.row {
		position: relative;
	}

</style>


