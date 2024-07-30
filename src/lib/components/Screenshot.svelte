<script lang="ts">
	let { src, alt, blurred }: { src: string; alt: string; blurred: boolean } = $props();
</script>

<img {src} {alt} class="rounded-lg transition-all shadow-4xl {blurred && 'blur-sm scale-95'}" />
