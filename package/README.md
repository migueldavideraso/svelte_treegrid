# Svelte Treegrid
#
### Demos
https://migueldavideraso.github.io/svelte_treegrid/dist/
#
#### Getting started
```html
<script>
  import TreeGrid from 'svelte-treegrid'

  const dataSource = [
    
    { id: 'product_01', name: 'Product 01', createdAt: new Date(), price: 1000 },
  
    { id: 'category_01', name: 'Category 01', category: 'category' },
    { id: 'product_01.01', name: 'Product 01.01', createdAt: new Date(), parent: 'category_01', price: 1000 },
  ]

  let treeGridComponent = {}

	const editSettings = { allowEdit: true }
	const columns = [
		{ field: 'name', name: 'Name', width: 200 },
		{ name: 'Created At', field: 'createdAt', align: 'center', type: 'date', width: 100, editSettings: { allowEdit: false }, format: { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' } },
		{ field: 'price', align: 'right', type: 'number', name: 'Price', width: 100 },
	]

	const onEvent = (event) => {

		if (event.type === 'row_created' && event.rowData.category === 'category') {
			event.rowElement.style.backgroundColor = '#eee'
			return
		}

		if (event.type === 'cell_created' && event.rowData.category === 'category') {
			event.cellElement.style.fontWeight = '600'
			return
		}

		if (
			event.type === 'update_cell_created' &&
			event.rowData.category === 'category' &&
			event.column.field === 'price'
		) {
			const input = event.cellElement.querySelector('input')
			input.style.opacity = '.7'
			input.setAttribute('readonly', '')
			return
		}
	}

</script>

<main>

	<div class="card">

		<section class="header_container">
			Default Settings
		</section>

		<section class="treegrid_container">
			<TreeGrid
				bind:component={treeGridComponent}
				{onEvent}
				{columns}
				{dataSource}
				{editSettings}
			/>
		</section>

	</div>

</main>

<style>

	main {
		flex-direction: column;
		display: flex;
		grid-gap: 20px;
		margin: 20px auto;
		width: min(100% - 40px, 800px);
	}

	.card {
		background-color: #fff;
		flex-direction: column;
		display: flex;
		height: 500px;
		padding: 10px;
		grid-gap: 10px;
		border-radius: 5px;
	}

	.header_container {
		font-size: 1.5rem;
		font-weight: 600;
	}
	
	.treegrid_container {
		height: inherit;
		overflow: auto;
		flex: auto;
	}

</style>

```
