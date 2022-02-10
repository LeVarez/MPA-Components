<script lang='ts'>
    import {Splide, SplideSlide} from "@splidejs/svelte-splide";
    import { onMount } from "svelte";

    import CarouselDots from './CarouselDots.svelte'

    export let backgroundColor = '#fbe26b';
    export let buttonColor = '#fbe26b';
    export let textColor = '#202020';
    export let slides:Slide[] = [];
    export let currentPageIndex = 0;

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
    });

    let handlePrevButton = () => {
        splide.go(controller.getPrev())
    }
    let handleNextButton = () => {
        console.log(splide.go(controller.getNext()))
    }
    let handleDotClick = (index) => {
        splide.go(index)
    }
    let handleMove = (event) => {
        currentPageIndex = event.detail.index;
    }
</script>

<div class="container" style="background-color: {backgroundColor};">
    <Splide
    options={ {
        rewind: true,
        width : 800,
        height : 300,
        gap: -3,
    } }
    bind:this={splide}
    on:move={handleMove}
    >
        <div class="navigationButtons" slot="before-track">
            <div on:click={handlePrevButton} class="button prev" style="background-color: {buttonColor};">
                &#10094;
            </div>
            <div on:click={handleNextButton} class="button next" style="background-color: {buttonColor};">
                &#10095;
            </div>
        </div>
        {#each slides as slide}
        <SplideSlide>
            <div  class="slide" style="background: {backgroundColor};">
            <!--<div class="img"/>-->
            <div class="info" style="color: {textColor};">
                <div class="title">{slide.title}</div>
                <div class="content">{slide.content}</div>
            </div>
            </div>
        </SplideSlide>
        {/each}
        <div slot="after-track" class="custom-dots">
            <CarouselDots
            currentPageIndex={currentPageIndex}
            pagesCount={slides.length}
            progress={true}
            color={textColor}
            handleDotClick={handleDotClick}/>
        </div>
    </Splide>
</div>

<style type="text/postcss">
    @import "https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css";
    :global(.splide__arrow){
        display: none;
    }
    :global(.splide__pagination){
        display: none;
    }
    :global(.splide__track){
        border-radius: 15px;
    }

    .container{
        border-radius: 15px;
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
    .slide{
        overflow: hidden;
        height: 100%;
    }
    .info{
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        top: 0;
        padding: 15px 30px;
        height: 80%;
    }
    .slide .info .title{
        font-size: 16px;
        font-weight: 700;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .slide .info .content{
        font-size: 16px;
        max-height: 75%;
        overflow: hidden;
    }
    .custom-dots{
        position: absolute;
        bottom: 10px;
        left: 0;
    }
</style>