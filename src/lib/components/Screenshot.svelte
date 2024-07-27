<script lang="ts">
	export let src: string;
	export let alt: string;
	export let selected: boolean;
</script>

<img
	{src}
	{alt}
	class="rounded-lg transition-all shadow-4xl {selected ? '' : 'scale-95 -z-10 blur-sm'}"
/>
