<script lang="ts">
    import {Splide, SplideSlide} from "@splidejs/svelte-splide";
    import type { Options } from '@splidejs/splide';
    import { onMount } from "svelte";
    import type { cardParameters } from "../interfaces";
    import MainPreviewCard from "./MainPreviewCard.svelte";
    import '@splidejs/splide/dist/css/splide.min.css';
    import SwipeButton from "./SwipeButton.svelte";

    export let parameters: cardParameters[];

    let currentCard: number;

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
        pagination: false,
        arrows: false
    }

    const event = () => {};

</script>

<div class="carousel-container">

    <div class="splide__arrows">
        <div class="splide__arrow splide__arrow--prev">
            <SwipeButton clickEvent={event}></SwipeButton>
        </div>
        <div class="splide__arrow splide__arrow--next">
            <SwipeButton clickEvent={event}></SwipeButton>
        </div>
    </div>
    
    <Splide
        options={ options }
        bind:this={splide}
        on:mounted={ e => currentCard = e.detail.splide.index }
        on:move={ e => currentCard = e.detail.index }
    >
        {#each parameters as p, i}
            <SplideSlide on:focus={() => {console.log("FOCUS!")}}>
                <MainPreviewCard parameters={p} active={i===currentCard}/>
            </SplideSlide>
        {/each}
    </Splide>
</div>

<style>

</style>