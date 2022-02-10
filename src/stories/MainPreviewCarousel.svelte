<script lang="ts">
    import {Splide, SplideSlide} from "@splidejs/svelte-splide";
    import { onMount } from "svelte";

    //export let previewCards: MainPreviewCard[] = [];

    let tagArray = [{tag: "Blue economy", alt: ""}, 
                    {tag: "MPAs", alt: ""}, 
                    {tag: "Blue growth", alt: ""}, 
                    {tag: "Ocean conservation", alt: ""}, 
                    {tag: "Sustainable development", alt: ""}, 
                    {tag: "Nature-based solutions", alt: ""}, 
                    {tag: "All biomes", alt: ""}];

    let splide;
    let controller;
    let splideElement;

    onMount(() => {
        controller = splide.splide.Components.Controller;
        splideElement = document.getElementById('splide');
    });

</script>

<div class="carousel-container">

    <Splide
        options={ {
                width : 1000,
                height : 1000,
                gap: 0,
        } }
        bind:this={splide}
    >

    </Splide>

</div>

<style>

    .carousel-container {
        max-width: 2000px;
        background: red;
    }

</style>