<script lang="ts">
	export let src: string;
	export let alt: string;
	export let selected: boolean;
</script>

<img {src} {alt} class="shadow-xl transition-all {!selected && 'scale-95 mx-1 -z-10'}" />
