
<script >

	import { onMount } from "svelte"

	export let onEvent = (e) => {}
	export let rowData = {}
	export let column = {}

	let cellElement = null
	let value = rowData[column.field] || null
	let allowEdit = !(column.editSettings?.allowEdit === false)

	const onInput = (e) => {
		rowData[column.field] = e.target.value
	}

	onMount(() => {

		const input = cellElement.querySelector('input')

		input.style.textAlign = column.align || 'left'

		if (!allowEdit) {
			input.style.opacity = '.7'
			input.setAttribute('readonly', '')
		}
		else {
			input.oninput = onInput
		}

		onEvent({
			type: 'update_cell_created',
			cellElement,
			rowData,
			column,
		})
	})

</script>

<div
	class="cell"
	bind:this={cellElement}
>

	{#if column.type === 'number'}
		<input type="number" value={value} />
	{:else if column.type === 'date'}
		<input type="date" value={!value?.toISOString ? value : value.toISOString().slice(0, 10)} />
	{:else}
		<input value={value} type="text"/>
	{/if}

</div>

<style>

	.cell {
		align-items: center;
		display: flex;
	}

	.cell input {
		height: 20px;
	}

</style>
