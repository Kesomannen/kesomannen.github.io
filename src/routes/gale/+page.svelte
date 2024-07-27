<script lang="ts">
	import Linux from '~icons/mdi/linux';
	import Macos from '~icons/mdi/apple';
	import Windows from '~icons/mdi/windows';
	import Download from '~icons/material-symbols/download';
	import Github from '~icons/mdi/github';
	import Screenshot from '$lib/components/Screenshot.svelte';
	import { fade } from 'svelte/transition';

	const screenshots = [
		{
			src: '/screenshot1.png',
			alt: 'Config editor',
			description: ['Edit config with beautiful and performant editor']
		},
		{
			src: '/screenshot3.png',
			alt: 'Mod browser',
			description: [
				'Browse and install mods from thunderstore with one click',
				'View changelog, readme and dependencies right in the app',
				'Filter, sort and search with near-zero latency'
			]
		},
		{ src: '/screenshot2.png', alt: 'Profile manager', description: [] }
	];

	let selected = $state(1);

	let downloadsHeader: HTMLHeadingElement;
</script>

<div
	class="flex flex-col w-full max-w-[70rem] mx-auto items-center py-16 px-12 text-white relative"
>
	<div class="text-center">
		<h1 class="text-6xl font-semibold">The mod manager you've been waiting for</h1>
		<h3 class="text-2xl pt-4 text-slate-300">
			Gale is a lightweight and modern mod manager for Thunderstore
		</h3>
	</div>

	<div class="button-container flex items-center py-6 text-xl gap-2">
		<button
			class="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-xl font-medium shadow-xl"
			onclick={() => {
				downloadsHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}}><Download />Download</button
		>
		<a
			class="flex items-center gap-2 text-slate-200 bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-xl left-8 shadow-xl"
			href="https://github.com/kesomannen/gale"><Github />View source</a
		>
	</div>

	<div class="text-center">
		<div class="flex items-center w-screen px-16 justify-center">
			{#each screenshots as data, i}
				<Screenshot {...data} selected={i === selected} />
			{/each}
		</div>

		<div class="flex items-center justify-center gap-4 pt-4">
			{#each screenshots as _, i}
				<button
					class="{selected === i
						? 'size-4'
						: 'size-3 opacity-50'} rounded-full transition-all bg-slate-400"
					onclick={() => (selected = i)}
				></button>
			{/each}
		</div>

		<h3 class="pt-4 text-2xl font-medium" transition:fade>{screenshots[selected].alt}</h3>

		<ul class="text-slate-300 text-lg max-w-[40rem] mx-auto">
			{#each screenshots[selected].description as desc}
				<li class="py-0.5">- {desc}</li>
			{/each}
		</ul>
	</div>

	<div class="py-12 text-center w-full max-w-[40rem]">
		<h1 class="text-4xl font-semibold" bind:this={downloadsHeader}>Downloads</h1>

		<div class="flex flex-col pt-4 gap-2 w-full text-lg">
			<div class="flex items-center gap-2">
				<Windows class="size-8" />
				Windows

				<div class="ml-auto">
					<a
						class="flex items-center hover:underline py-1 gap-2 text-blue-400 hover:text-blue-300"
						href="https://github.com/kesomannen/gale"><Download class="size-5" />.msi installer</a
					>
				</div>
			</div>
			<div class="h-0.5 w-full bg-gray-700 my-1.5"></div>
			<div class="flex items-center gap-2">
				<Macos class="size-8" />
				Mac

				<div class="ml-auto">
					<a
						class="flex items-center hover:underline py-1 gap-2 text-blue-400 hover:text-blue-300"
						href="https://github.com/kesomannen/gale"><Download class="size-5" />.dmg image</a
					>
				</div>
			</div>
			<div class="h-0.5 w-full bg-gray-700 my-1.5"></div>
			<div class="flex items-center gap-2">
				<Linux class="size-8" />
				Linux

				<div class="ml-auto">
					<a
						class="flex items-center justify-end hover:underline py-1 gap-2 text-blue-400 hover:text-blue-300"
						href="https://github.com/kesomannen/gale"><Download class="size-5" />AppImage</a
					>
					<a
						class="flex items-center hover:underline py-1 gap-2 text-blue-400 hover:text-blue-300"
						href="https://github.com/kesomannen/gale"><Download class="size-5" />.deb package</a
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.button-container {
		@media (max-width: 500px) {
			flex-direction: column;
		}
	}
</style>
