<script lang='ts'>
    import {Splide, SplideSlide} from "@splidejs/svelte-splide";
    import { onMount } from "svelte";
    import content from './stories/data/TextSlider.json';

    export let backgroundColor = '#fbe26b';
    export let buttonColor = '#fbe26b';
    export let textColor = '#202020';

    export let slides:Slide[] = content;

    interface Slide{
		title: string;
		content: string;
    }

    let splide;
    let controller;
    let splideElement;

    onMount(() => {
        controller = splide.splide.Components.Controller;
        splideElement = document.getElementById('splide');
        console.log(splideElement)
    })

    let handlePrevButton = () => {
        splide.go(controller.getPrev())
    }
    let handleNextButton = () => {
        splide.go(controller.getNext())
    }

    $:{
        console.log(splide)
    }
</script>

<Splide
options={ {
    rewind: true,
    width : 400,
    gap: -1,
  } }
    bind:this={splide}
    >
    <div class="navigationButtons" slot="before-track">
        <div on:click={handlePrevButton} class="button prev" style="background-color: {buttonColor};">
            &#10094;
        </div>
        <div on:click={handleNextButton} class="button next" style="background-color: {buttonColor};">
            &#10095;
        </div>
    </div>
    <SplideSlide>
      <div class="slide">1</div>
    </SplideSlide>
    <SplideSlide>
      <div class="slide">2</div>
    </SplideSlide>
     <SplideSlide>
      <div class="slide">3</div>
    </SplideSlide>
</Splide>

<style type="text/postcss">

    @import "https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css";

    :global(.splide__arrow){
        display: none;
    }
    :global(.splide__track){
        border-radius: 15px;
    }

    .slide{
        width: 400px;
        height: 400px;
        background-color: aqua;
    }

    .navigationButtons{
        width: 100px;
        display: inline-flex;
        position: absolute;
        z-index: 2;
        right: 0;
        margin-top: 20px;
        margin-right: 20px;
    }
    .custom-dots{
        z-index: 2;
        position: absolute;
        bottom: 10px;
        left: 0;

    }
    .navigationButtons .button{
        border: rgba(0, 0, 0, 0.1) solid 1px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        margin-right: 10px;
        text-align: center;
        line-height: 40px;
    }
    .navigationButtons .button:hover{
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
    }
</style>