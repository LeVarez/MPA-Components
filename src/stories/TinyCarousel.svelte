<script lang="ts">
    import {Splide, SplideSlide} from "@splidejs/svelte-splide";
    import TinyPreviewCard from './TinyPreviewCard.svelte';

    import './styles.css';

    import type {TinyCardParams} from '../interfaces';
    import type { Options } from '@splidejs/splide';
    import { onMount } from "svelte";


    export let slides : TinyCardParams[] = [];
    export let width : number =  1100;
    export let title : string = "<b>You may also like</b>"


    let currentSlideIndex : number = 0;
    let prevArrow : HTMLElement;
    let nextArrow : HTMLElement;
    let perPage : number = 3;
    let gap : number = 0;

    const options: Options = {
        type: 'slide',
        rewind : false,
        perPage: perPage,
        perMove: 1,
        width: width,
        gap: 0,
        classes: {
		arrow : 'splide__arrow custom_arrow',
		prev  : 'splide__arrow--prev',
		next  : 'splide__arrow--next',
        },
        padding: { right: '13%' }

    }


    let handleMove = (event) => {
        currentSlideIndex = event.detail.index;
        console.log(currentSlideIndex)
    }

    let addClass = (element : HTMLElement, cssClass : string) => {
        if(!element) return;

        if(!element.classList.contains(cssClass)) element.classList.add('vanish');
    }

    let removeClass = (element : HTMLElement, cssClass : string) => {
        if(!element) return;

        if(element.classList.contains(cssClass)) element.classList.remove('vanish');
    }

    let splide;
    onMount(() => {
        prevArrow = document.querySelector('.splide__arrow--prev')
        nextArrow = document.querySelector('.splide__arrow--next')
    })


    $:
        if(currentSlideIndex === 0) {
            addClass(prevArrow, 'vanish')
        }
        else removeClass(prevArrow, 'vanish')

    $:
        if(currentSlideIndex + perPage === slides.length) {
            addClass(nextArrow, 'vanish')
        }
        else removeClass(nextArrow, 'vanish')

</script>


<div class='container'>
    <div class="content">
        <p class="title">{@html title}</p>
        <Splide
            options={ options }
            bind:this={splide}
            on:move={handleMove}
        >
            {#each slides as slide, i}
                <SplideSlide>
                    <TinyPreviewCard
                        previewImage = {slide.previewImage}
                        title = {slide.title}
                        tags = {slide.tags}
                    />
                </SplideSlide>
            {/each}
        </Splide>
        <div class="opacity-div"/>
    </div>
</div>

<style type="text/postcss">
    @import "https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css";

    .container  {
        position: absolute;



        background: #F9F9F9;
        box-shadow: inset 0px 2px 12px rgba(0, 0, 0, 0.05);
        border-radius: 40px 0px 0px 40px;
    }
    .content{
        position: relative;
        height: auto;
        padding: 22px 25px 30px 25px;
    }

    .title{
        font-family: 'Montserrat';
    }

    .opacity-div{
        height: 100%;
        width: 15%;
        background: linear-gradient(to right, #F9F9F900, #F9F9F9);
        position: absolute;
        top: 0;
        right: 0;
    }

</style>