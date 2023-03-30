
<script>

	import Cell from "./Cell.svelte"
	import Row from "./Row.svelte"
	import UpdateRow from "./UpdateRow.svelte"

	export let elementsByParent = {}
	export let updateRowState = {}
	export let editSettings = {}
	export let columns = []
	export let treeColumnIndex = 0
	export let onEvent = () => {}
	export let deleteRow = () => {}
	export let updateRowData = () => {}
	export let isAllExpanded = false
	export let isAllCollapsed = false

	let headerRow = null
	let rowStyle = ''

	$: if (headerRow) {
		let gridTemplateColumns = ''
		let totalWidth = 0
	
		columns.forEach(obj => totalWidth += obj.width || 100)
		columns.forEach(obj => {
			const width = obj.width || 100
			const percentage = (width / totalWidth) * 100
			gridTemplateColumns += `minmax(${width}px, ${percentage}%) `
		})

		rowStyle = `grid-template-columns: ${gridTemplateColumns};`

		setTimeout(() => {
			let rowWidth = headerRow.scrollWidth - 1
			rowStyle = `grid-template-columns: ${gridTemplateColumns}; min-width: ${rowWidth}px;`
		}, 50)
	}

</script>

<section class="grid-container">

	<header style={rowStyle}>

		<div class="row" style={rowStyle} bind:this={headerRow}>
			{#each columns as column (column.field)}
				<Cell
					{column}
					isHeaderCell
					value={column.name || column.field || ''}
				/>
			{/each}
		</div>

	</header>

	{#if editSettings.allowEdit}
		<UpdateRow
			{updateRowData}
			{deleteRow}
			{onEvent}
			{columns}
			{rowStyle}
			{updateRowState}
		/>
	{/if}

	{#each (elementsByParent[null] || []) as rowData}

		<Row
			{isAllExpanded}
			{isAllCollapsed}
			{onEvent}
			{rowData}
			{columns}
			{rowStyle}
			{editSettings}
			{updateRowState}
			{treeColumnIndex}
			{elementsByParent}
			moveCollapseCell={0}
		/>

	{/each}

</section>



<style>

	.grid-container {
		position: relative;
		overflow: auto;
		height: inherit;
		flex: auto;
	}

	header {
		background-color: #f9f9f9;
		position: sticky;
		top: 0px;
		z-index: 2;
		font-weight: 600;
		color:rgb(131, 131, 138);
		box-shadow: 10px 0px 20px -10px rgba(0, 0, 0, .75);
	}

</style>