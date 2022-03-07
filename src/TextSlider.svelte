<script lang="ts">
    import TextSlider from './stories/TextSlider2.svelte';
    import slides from './stories/data/TextSlider.json';
</script>

<div style="width: fit-content;">
    <TextSlider
      {slides}
    />
</div>