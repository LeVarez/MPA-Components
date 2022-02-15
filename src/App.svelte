<script lang='ts'>
    import MainPreviewCarousel from './stories/MainPreviewCarousel.svelte';
    import type { cardParameters, tagParameters } from "./interfaces";
    
    let tagArray1: tagParameters[] = 
        [{tag: "Blue economy", alt: ""}, 
        {tag: "MPAs", alt: ""}, 
        {tag: "Blue growth", alt: ""}, 
        {tag: "Ocean conservation", alt: ""}, 
        {tag: "Sustainable development", alt: ""}, 
        {tag: "Nature-based solutions", alt: ""}, 
        {tag: "All biomes", alt: ""}
    ];


    let param1: cardParameters = {
        cardType: "chapter", 
        previewImage: "/img/chapter-preview-image.png",
        category: 'Sustainable financing',
        title: 'What should MPA managers know about the blue economy and business planning?', 
        tags: tagArray1
    }

    let params = [param1, param1, param1, param1, param1, param1];

</script>


<div>
    <MainPreviewCarousel parameters={params} />
</div>
