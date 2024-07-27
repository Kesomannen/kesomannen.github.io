<script>
	import Screenshot from '../../components/Screenshot.svelte';

	const screenshots = [
		{ label: '', src: '/screenshot1.png', alt: 'Screenshot 1' },
		{ src: '/screenshot2.png', alt: 'Screenshot 2' },
		{ src: '/screenshot3.png', alt: 'Screenshot 3' }
	];

	let selected = 1;
</script>

<div
	class="flex flex-col w-full max-w-[100rem] mx-auto items-center py-16 px-12 text-white relative"
>
	<div class="text-center">
		<h1 class="text-6xl font-semibold">The mod manager from the future</h1>
		<h3 class="text-2xl pt-4 text-blue-200">
			Gale is a lightweight and modern mod manager for Thunderstore
		</h3>
	</div>

	<div class="flex items-center py-6 text-xl">
		<button
			class="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-xl font-medium left-8 shadow-xl"
			>Download for windows</button
		>
	</div>

	<div>
		<div class="flex items-center w-screen overflow-hidden justify-center">
			{#each screenshots as data, i}
				<Screenshot {...data} selected={i === selected} />
			{/each}
		</div>

		<div class="flex justify-center gap-4 pt-4">
			{#each screenshots as _, i}
				<button class="{selected === i ? '' : ''} rounded-full" on:click={() => (selected = i)}
				></button>
			{/each}
		</div>
	</div>
</div>
