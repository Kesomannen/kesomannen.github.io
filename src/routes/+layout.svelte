<script lang="ts">
	import '../app.css';
</script>

<div class="overflow-x-hidden">
	<slot />
</div>

<style lang="postcss">
	:global(html) {
		background: linear-gradient(180deg, theme(colors.gray.900) 0%, theme(colors.gray.800) 100%);
	}
</style>
