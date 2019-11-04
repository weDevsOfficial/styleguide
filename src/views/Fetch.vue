<template>
	<section>
		<h1>Fetch</h1>
		<p>This renderless component acts as a <em>data provider</em> and exposes the <strong>fetched json</strong> to it's nested elements.</p>
		<h4>Example:</h4>
		<p>URL: https://jsonplaceholder.typicode.com/todos/:id</p>
		<p>Fetched JSON:</p>
		<fetch :url="`https://jsonplaceholder.typicode.com/todos/${Math.ceil(Math.random() * 10)}`">
			<div slot-scope="{json: todo, loading}">
				<p v-if="loading">Loading...</p>
				<pre v-else>{{ todo }}</pre>
			</div>
		</fetch>
	</section>
</template>
<script>
	import Fetch from '@/components/http/Fetch'

	export default {
		name: 'FetchPage',
		components: {
			Fetch
		}
	}
</script>