<script lang="ts">
	import { getDownloadUrl, type PackageType } from '$lib/download.svelte';
	import { onMount } from 'svelte';
	import Download from '~icons/material-symbols/download';

	let { label, pkgType }: { label: string; pkgType: PackageType } = $props();

	let href: string | undefined = $state();

	onMount(async () => {
		href = await getDownloadUrl(pkgType);
	});
</script>

<a
	class="flex items-center justify-end font-medium hover:underline py-1 gap-2 text-green-400 hover:text-green-300"
	{href}><Download class="size-5" />{label}</a
>
