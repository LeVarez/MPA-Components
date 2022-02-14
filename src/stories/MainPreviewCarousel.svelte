<script lang="ts">
    import {Splide, SplideSlide} from "@splidejs/svelte-splide";
    import type { Options } from '@splidejs/splide';
    import { onMount } from "svelte";
    import type { cardParameters } from "../interfaces";
    import MainPreviewCard from "./MainPreviewCard.svelte";
    import '@splidejs/splide/dist/css/splide.min.css';

    export let parameters: cardParameters[];

    let splide;
    let controller;
    let splideElement;

    onMount(() => {
        controller = splide.splide.Components.Controller;
        splideElement = document.getElementById('splide');
    });

    const options: Options = {
        type: 'loop',
        rewind : true,
        perPage: 3,
        perMove: 1,
        width: '150em',
        gap: '8em',
        focus: 'center',
        wheel: true,
        pagination: false
    }

</script>

<div class="carousel-container">

    <Splide
        options={ options }
        bind:this={splide}
        on:mounted={ e => console.log( e.detail.splide.length ) }
        on:move={ e => console.log( 'move to', e.detail.index ) }
    >
        {#each parameters as p}
            <SplideSlide>
                <MainPreviewCard parameters={p} />
            </SplideSlide>
        {/each}
    </Splide>

</div>

<style>

</style>