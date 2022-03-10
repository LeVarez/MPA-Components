<script lang="ts">
    import '@splidejs/splide/dist/css/splide.min.css';
    import {Splide, SplideSlide} from "@splidejs/svelte-splide";
    import MainPreviewCard from "./MainPreviewCard.svelte";
    import CarouselDots from "./CarouselDots.svelte";
    import SwipeButton from './SwipeButton.svelte';
    import type { Options } from '@splidejs/splide';
    import type { cardParameters } from "./interfaces";

    export let parameters: cardParameters[];

    let currentCard = 0;
    let splide: Splide;

    const options: Options = {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '100px',
        autoWidth:true,
        width: '100vw',
        focus: 'center',
        slideFocus: true,
        pagination: false,
        arrows: false,
        updateOnMove: true,
        lazyLoad: true,
        keyboard: true
    }

    const handleMove = (newIndex: number) => {
        parameters[currentCard].active = false;
        currentCard = newIndex;
        parameters[currentCard].active = true;
    }

    const handlePaginationEvent = (newIndex: number) => {
        splide.go(newIndex);
    }

    const splideMountedEvent = (index: number) => {
        currentCard = index;
        parameters[currentCard].active = true;
    }

    const nextCardButtonPressed = () => {
        splide.go('>');
    }

    const prevCardButtonPressed = () => {
        splide.go('<');
    }

    const chapterText = `Get the <b>answers</b> to all your questions.`
    const caseStudyText = `Explore what <b>others have done</b>`
    const titleText = parameters[0].cardType === 'chapter' ? chapterText : caseStudyText;

</script>

<div class="container">
    <div class="title-container">
        {@html titleText}
        <div class="pagination">
            <CarouselDots 
                currentPageIndex={currentCard}
                pagesCount={parameters.length}
                progress={true}
                color='#2A2A2A'
                handleDotClick={handlePaginationEvent}
            />
        </div>
    </div>
    <div class="carousel-container">
        <Splide
            {options}
            bind:this={splide}
            on:mounted={ (e) => splideMountedEvent(e.detail.splide.index)}
            on:move={(e) => handleMove(e.detail.index)}
        >
            {#each parameters as p}
                <SplideSlide>
                    <MainPreviewCard parameters={p}/>
                </SplideSlide>
            {/each}
        </Splide>
        <div class="button prev">
            <SwipeButton 
                clickEvent={prevCardButtonPressed}
                type={"prev"}
            />
        </div>
        <div class="button next">
            <SwipeButton 
                clickEvent={nextCardButtonPressed}
                type={"next"}
            />
        </div>
    </div>
</div>



<style>

    .pagination {
        margin-top: 15px;
        margin-bottom: 60px;
    }

    .title-container {
        font-family: 'Montserrat';
        font-size: 48px;
        line-height: 58.51px;
        font-weight: 300;
        color: #2A2A2A;
        max-width: 600px;
        padding-left: 100px;
        padding-top: 25px;
    }

    .container {
        background: #F9F9F9;
    }

    .carousel-container {
        display: flex;
        position: relative;
    }

    .button {
        vertical-align: middle;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .next {
        right: 50px;
    }

    .prev {
        left: 50px;
    }

</style>