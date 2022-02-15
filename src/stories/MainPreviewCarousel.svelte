<script lang="ts">
    import '@splidejs/splide/dist/css/splide.min.css';
    import { onMount } from "svelte";
    import {Splide, SplideSlide} from "@splidejs/svelte-splide";
    import MainPreviewCard from "./MainPreviewCard.svelte";
    import SwipeButton from "./SwipeButton.svelte";
    import type { Options } from '@splidejs/splide';
    import type { cardParameters } from "../interfaces";

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
        perPage: 3,
        perMove: 1,
        gap: '8rem',
        width: '150rem',
        focus: 'center',
        wheel: true,
        pagination: false,
        arrows: true
    }

    const event = () => {console.log(width, height)};

    let width, height;

</script>

<div class="carousel-container" bind:clientHeight={height} bind:clientWidth={width}>
    <Splide
        {options}
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

<button on:click={event}></button>

<style>

    .carousel-container {
        width: 100%;
    }

</style>