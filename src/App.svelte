<script lang='ts'>
    import TextSection from "./stories/TextSection.svelte";
    import TextSlider from "./stories/TextSlider2.svelte";
    import CircleMenu from "./stories/CircleMenu.svelte"
    import content from './stories/data/TextSlider.json';
import { text } from "svelte/internal";

    let currentPageIndex = 0;
    let backgroundColor = "#fbe26b";
    let buttonColor = "#fbe26b";
    let textColor = "#202020";
</script>


<div>
<TextSlider
    bind:currentPageIndex={currentPageIndex}
    slides={content}
    backgroundColor={backgroundColor}
    buttonColor={buttonColor}
    textColor={textColor}
/>
<CircleMenu
        data={content}
        radius={100}
        thickness={20}
        x={150}
        y={150}
        gap={5}
        color={backgroundColor}
        borderColor={backgroundColor}
        bind:currentPageIndex={currentPageIndex}
/>
</div>

<style type="text/postcss">

</style>