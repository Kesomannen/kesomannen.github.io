<script lang="ts">
	import Linux from '~icons/mdi/linux';
	import Macos from '~icons/mdi/apple';
	import Windows from '~icons/mdi/windows';
	import Download from '~icons/material-symbols/download';
	import Github from '~icons/mdi/github';
	import Speed from '~icons/material-symbols/speed';
	import Modpack from '~icons/material-symbols/package';
	import Config from '~icons/material-symbols/settings';

	import DownloadUrl from '$lib/components/DownloadUrl.svelte';
	import Screenshot from '$lib/components/Screenshot.svelte';

	const screenshots = [
		{
			src: 'screenshot1.png',
			alt: 'Gale config editor screenshot'
		},
		{
			src: 'screenshot2.png',
			alt: 'Gale mod list screenshot'
		},
		{
			src: 'screenshot4.png',
			alt: 'Gale mod creator screenshot'
		}
	];

	let downloadsHeader: HTMLHeadingElement;
</script>

<div class="flex flex-col w-full max-w-[65rem] mx-auto items-center py-20 px-8 text-white relative">
	<div class="text-center">
		<h1 class="md:text-7xl text-5xl font-extrabold">The mod manager you've been waiting for</h1>
		<h3 class="text-2xl pt-4 text-slate-300">
			Gale is a lightweight and modern mod manager for Thunderstore
		</h3>
	</div>

	<div class="button-container flex items-center py-6 text-xl gap-2">
		<button
			class="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-xl font-semibold shadow-xl"
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
		<div class="flex items-center w-screen max-w-[75rem] px-24 justify-center">
			{#each screenshots as data, i}
				<Screenshot {...data} blurred={i != 1} />
			{/each}
		</div>
	</div>

	<div class="py-12">
		<h3 class="text-4xl font-bold text-center">Features</h3>
		<div class="text-center text-lg pt-2 text-slate-400">
			Gale does everything you'd expect from a mod manager, and more:
		</div>

		<div class="flex flex-col pt-6 max-w-[45rem] gap-5">
			<div class="flex items-center gap-8">
				<Speed class="size-12 flex-shrink-0" />
				<div class="text-slate-300 text-lg flex-shrink text-wrap">
					<div class="text-2xl font-semibold text-white">Fast & lightweight</div>
					Built with Rust and SvelteKit, Gale is extremely performant and responsive, while also using
					less resources than other mod managers.
				</div>
			</div>
			<div class="h-0.5 w-full bg-gray-700"></div>
			<div class="flex items-center gap-8">
				<Modpack class="size-12 flex-shrink-0" />
				<div class="text-slate-300 text-lg flex-shrink text-wrap">
					<div class="text-2xl font-semibold text-white">Modpack creator</div>
					Export your profiles as modpacks and publish them to Thunderstore from within the app. Customize
					the readme, changelog, included files and more.
				</div>
			</div>
			<div class="h-0.5 w-full bg-gray-700"></div>
			<div class="flex items-center gap-8">
				<Config class="size-12 flex-shrink-0" />
				<div class="text-slate-300 text-lg flex-shrink text-wrap">
					<div class="text-2xl font-semibold text-white">Config editor</div>
					Configure mods through a feature-rich and easy-to-use editor. Options are beautifully displayed
					as dropdowns, sliders, lists and more.
				</div>
			</div>
		</div>
	</div>

	<div class="py-12 text-center w-full max-w-[45rem]">
		<h3 class="text-4xl font-bold" bind:this={downloadsHeader}>Downloads</h3>

		<div class="flex flex-col pt-4 gap-3 w-full text-xl">
			<div class="flex items-center gap-3">
				<Windows class="size-10" />
				Windows

				<div class="ml-auto">
					<DownloadUrl label=".msi installer" pkgType="msi" />
				</div>
			</div>
			<div class="h-0.5 w-full bg-gray-700 my-1.5"></div>
			<div class="flex items-center gap-3">
				<Macos class="size-10" />
				Mac

				<div class="ml-auto">
					<DownloadUrl label=".dmg image" pkgType="dmg" />
				</div>
			</div>
			<div class="h-0.5 w-full bg-gray-700 my-1.5"></div>
			<div class="flex items-center gap-3">
				<Linux class="size-10" />
				Linux

				<div class="ml-auto">
					<DownloadUrl label="AppImage" pkgType="AppImage" />
					<DownloadUrl label=".deb package" pkgType="deb" />
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
