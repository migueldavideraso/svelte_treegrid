
<script>

	import Cell from "./UpdateCell.svelte"
	import CheckIcon from '../icons/check.svelte'
	import CloseIcon from '../icons/close.svelte'
	import DeleteIcon from '../icons/delete.svelte'

	import { timeout } from '../helpers.js'

	export let updateRowData = (id, newData) => {}
	export let deleteRow = (id) => {}
	export let onEvent = (e) => {}
	export let columns = []
	export let rowStyle = ''
	export let updateRowState = {}

	let rowData = {}
	let rowTop = ''
	let open = false
	let rowElement = null
	let updateRowElement = null

	updateRowState.subscribe(async state => {

		open = false
		rowData = {}

		if (!state.open) {
			return
		}

		await timeout(100)

		rowElement = state.rowElement
		rowData = state.rowData
		open = state.open

		const top = rowElement.offsetTop < 44 ? rowElement.offsetTop : rowElement.offsetTop - 10

		rowTop = `top: ${top}px;`

		onEvent({
			type: 'update_row_created',
			updateRowElement,
			rowData,
		})
	})

	const closeUpdateRow = () => {
		updateRowState.close()
	}

	const sendUpdateRow = () => {
		updateRowData(rowData.id, rowData)
		closeUpdateRow()
	}

	const sendDeleteRow = () => {
		deleteRow(rowData.id)
		closeUpdateRow()
	}

</script>

{#if open}

	<div
		bind:this={rowElement}
		class="row"
		style={rowStyle + rowTop}
	>

		{#each columns as column (column.field)}
			<Cell
				bind:rowData
				{onEvent}
				{column}
			/>
		{/each}

		<div class="options">
			<div class="buttons_container">
				<button on:click={closeUpdateRow}>
					<CloseIcon size={15} />
				</button>
				<button on:click={sendUpdateRow}>
					<CheckIcon size={15} />
				</button>
				<button on:click={sendDeleteRow}>
					<DeleteIcon size={15} />
				</button>
			</div>
		</div>
		
	</div>
{/if}


<style>

	.row {
		background-color: #eee;
		position: absolute;
		z-index: 1;
		padding: 10px 15px !important;
		border-top: 1px solid var(--border-color);
		box-shadow: 10px 0px 20px -10px rgba(0, 0, 0, .75);
	}

	.options {
		justify-content: center;
		display: flex;
		margin: -7.5px 0px -5px;
		grid-column: 1 / -1;
	}
	
	.options .buttons_container {
		background-color: #dadbdf;
		justify-content: center;
		display: flex;
		grid-gap: 10px;
		border-radius: 5px;
		padding: 2.5px 15px;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, .1);
	}

</style>


