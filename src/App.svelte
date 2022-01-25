<script>
	import TextSection from './stories/TextSection.svelte';
	import textSection from './stories/data/TextSection.json';
</script>

<div class="test">
	<TextSection
        title={textSection.title}
        content={textSection.content}
        buttonText={textSection.buttonText}
    />
</div>

<style>
	.test{
		width: 400px;
	}
</style>