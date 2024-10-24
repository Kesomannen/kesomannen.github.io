<script lang="ts">
	let { src, alt, blurred }: { src: string; alt: string; blurred: boolean } = $props();
</script>

<img
	{src}
	{alt}
	class="rounded-lg transition-all shadow-4xl border border-gray-700 {blurred &&
		'blur-sm scale-95'}"
/>
