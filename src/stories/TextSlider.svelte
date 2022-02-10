<script lang="ts">
    import CarouselDots from './CarouselDots.svelte';
    import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';
    import { onMount } from 'svelte';

    export let content:TextElement[] = [];
    export let backgroundColor = '#fbe26b';
    export let buttonColor = '#fbe26b';
    export let textColor = '#202020';

    export let currentPageIndex = 0;

    interface TextElement{
		title: string;
		content: string;
    }
    let width
    let carousel

    let handlePageNext = (event) => {
        carousel.goToNext();
    }
    let handlePagePrev = (event) => {
        carousel.goToPrev();
    }

    let goTo = (page: number) => {
        if(carousel != undefined && carousel != null) carousel.goTo(page)
    }

    $: if(currentPageIndex >= 0){ goTo(currentPageIndex) }

</script>
{@debug currentPageIndex}
<div class="container">
    <div class="navigationButtons" style="">
        <div on:click={handlePagePrev} class="button prev" style="background-color: {buttonColor};">
            &#10094;
        </div>
        <div on:click={handlePageNext} class="button next" style="background-color: {buttonColor};">
            &#10095;
        </div>
    </div>
    <Carousel
        bind:currentPageIndex={currentPageIndex}

        let:pagesCount
        let:showPage
        let:showPrevPage
        let:showNextPage
        bind:this={carousel}
    >
        {#each content as slide, id}
        <div  class="slide" style="background: {backgroundColor};" bind:clientWidth={width}>
            <!--<div class="img"/>-->
            <div class="info" style="color: {textColor};">
                <div class="title">{slide.title}</div>
                <div class="content">{slide.content}</div>
            </div>
        </div>
        {/each}
        <div slot="dots" class="custom-dots">
            <CarouselDots
            currentPageIndex={currentPageIndex}
            pagesCount={content.length}
            progress={true}
            color={textColor}
            handleDotClick={showPage}/>
        </div>
    </Carousel>
</div>

<style>
    :global(.sc-carousel__pages-window){
        border-radius: 15px;
        z-index: 1;
    }
    :global(.sc-carousel__arrow-container){
        display: none !important;
    }
    :global(.sc-carousel__carousel-container){
        width: 100% !important;
        height: 100% !important;
    }
    :global(.sc-carousel__content-container){
        height: 100%;
    }

    .container{
        position: relative;
        height: 100%;
        width: 100%;
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
    .slide{
        overflow: hidden;
        height: auto;
        width: auto;
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
        max-height: 80%;
        overflow: hidden;
    }
</style>