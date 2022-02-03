<script lang="ts">
    import CarouselDots from './CarouselDots.svelte';

    import { onMount } from 'svelte';

    export let content:TextElement[] = [];
    export let backgroundColor = '#fbe26b';
    export let buttonColor = '#fbe26b';
    export let textColor = '#202020';
    export let currentSlide = 0;

    let Carousel; // for saving Carousel component class
    let carousel; // for calling methods of the carousel instance
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });

    const handleNextClick = async () => {
        if(currentSlide >= content.length - 1){
            currentSlide = 0;
            console.log(1);
        }
        else {
            currentSlide += 1;
            console.log(2);
        }
        carousel.goToNext();
    }
    const handlePrevClick = () => {
        if(currentSlide <= 0) currentSlide = content.length - 1;
        else currentSlide -= 1
        carousel.goToPrev()
        console.log(currentSlide);
    }
    const handleDotClick = (index) => {
        if(index >= content.length) currentSlide = 0;
        else currentSlide = index;
        carousel.goTo(index);
    }

    interface TextElement{
		title: string;
		content: string;
    }



    let direction = 1;

    const transition_args = {
		duration: 200,
	}

    let width
    $:console.log(width);
</script>

<div class="container">
<div class="navigationButtons" style="">
    <div on:click={handlePrevClick} class="button prev" style="background-color: {buttonColor};">
        &#10094;
    </div>
    <div on:click={handleNextClick} class="button next" style="background-color: {buttonColor};">
        &#10095;
    </div>
</div>
<svelte:component
    this={Carousel}
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
          currentPageIndex={currentSlide}
          pagesCount={content.length}
          progress={true}
          on:pageChange={(event) => {handleDotClick(event.detail)}}
          ></CarouselDots>
    </div>
    </svelte:component>
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
        bottom: 0;
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