<script  lang="ts">
  import CircleMenu from './CircleMenu.svelte';
  import CircularMenu from './CircleMenu.svelte';
  import TextSlider from './TextSlider.svelte';

  export let title = "No title defined";
  export let content = [];
  export let componentsColor;


  let currentPageIndex = 0;

</script>

<div class="container">
  <div class="title">{@html title}</div>
  <TextSlider
    bind:currentPageIndex={currentPageIndex}
    content={content}
    backgroundColor={componentsColor.backgroundColor}
    buttonColor={componentsColor.buttonColor}
    textColor={componentsColor.textColor}
  />
  <CircleMenu
        data={content}
        radius={100}
        thickness={20}
        x={150}
        y={150}
        gap={5}
        color={componentsColor.backgroundColor}
        borderColor={componentsColor.backgroundColor}
        bind:currentPageIndex={currentPageIndex}
  />

</div>