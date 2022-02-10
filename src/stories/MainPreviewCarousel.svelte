<script lang="ts">
    import {Splide, SplideSlide} from "@splidejs/svelte-splide";
    import { onMount } from "svelte";
    import type MainPreviewCard from "./MainPreviewCard.svelte";

    export let previewCards: MainPreviewCard[] = [];

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

    {#each previewCards as card}
        {card}
    {/each}

    <Splide
        options={ {
                width : 1000,
                height : 1000,
                gap: 0,
        } }
        bind:this={splide}
    >

        {#each previewCards as card}
            {card}
        {/each}

    </Splide>

</div>

<style>

    .carousel-container {
        max-width: 2000px;
        background: red;
    }

</style>