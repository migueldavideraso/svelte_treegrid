
<script >

	import { getTextValue, timeout } from '../helpers.js'
	import Angle from '../icons/angle.svelte'

	export let onEvent = (e) => {}
	export let rowData = {}
	export let column = {}
	export let value = ''
	export let isCollapsed = false
	export let isHeaderCell = false
	export let moveCollapseCell = 0
	export let isCollapseCell = false
	export let hasCollapseButton = false

	let cellElement = null

	$: textvalue = isHeaderCell ? value : getTextValue(value, column)
	$: align = (
		column.align === 'center' ? 'center' :
		column.align === 'right' ? 'flex-end' :
		'flex-start'
	)

	$: if (cellElement && rowData.id) {
		createdCellEvent()
	}

	const createdCellEvent = async () => {
		await timeout(100)

		onEvent({
			type: 'cell_created',
			cellElement,
			rowData,
			column,
		})
	}

	const collapse = () => {
		isCollapsed = !isCollapsed
	}

</script>

<div
	class="cell"
	bind:this={cellElement}
	style="justify-content: {align};"
>

	{#if isCollapseCell}
		<span class="cell_space" style="width: {moveCollapseCell}px"/>
	{/if}

	{#if hasCollapseButton}
		<button class="collapse {isCollapsed ? 'collapsed' : 'expanded'}" on:click={collapse}>
			<Angle />
		</button>
	{/if}

	{textvalue}

</div>

<style>

	.cell {
		display: flex;
	}

	.collapse {
		background: none;
		border: none;
		padding: 0;
		width: 10px;
		height: 10px;
		margin-right: 2px;
		margin-left: -12.5px;
		transform: rotate(30deg);
		transition: transform .5s;
	}

	.collapse.collapsed {
		transform: rotate(0deg);
	}

	.cell_space {
		display: inline-block;
	}
</style>
