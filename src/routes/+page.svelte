<script lang="ts">
	let storage = localStorage.getItem('count');
	let count = $state(storage ? parseInt(storage) : 0);

	$effect(() => {
		localStorage.setItem('count', count.toString());
	});
</script>

<div class="w-full h-screen flex items-center justify-center">
	<button class="bg-pink-400 px-4 py-2 rounded-lg" onclick={() => count++}
		>Increment ({count})</button
	>
</div>
