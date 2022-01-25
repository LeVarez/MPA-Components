<script lang="ts">
    import { afterUpdate } from 'svelte/internal';
	import { hslide } from './scripts/hslide.js';

    interface TextElement{
		title: string;
		content: string;
    }

	export let content:TextElement[] = [];
    export let backgroundColor = '#fbe26b';
    export let buttonColor = '#fbe26b';
    export let textColor = '#202020';
    export let currentSlide = 0;
    export let transitionTime = 10000;

    const transition_args = {
		duration: 200,
	}


    let animatonCurrentDot

    afterUpdate(() => {
        animatonCurrentDot = document.querySelector('.img-slider .navigationDots .button.active .progress').animate([
            // keyframes
            { width: 0 },
            { width: '100%' },

        ],
        {
            // timing options
            duration: transitionTime,
            iterations: 1,
        });

        animatonCurrentDot.onfinish = function(e) {
            currentSlide = currentSlide + 1 >= content.length ? 0 : currentSlide + 1;
        }
    })

</script>



<div class="img-slider">
    {#each content as slide, id}
    {#if currentSlide === id}
      <div  class="slide {currentSlide === id? 'active' : ''}" style="background: {backgroundColor};">
            <!--<div class="img"/>-->
            <div class="info" in:hslide={transition_args} out:hslide={transition_args} style="color: {textColor};">
                <div class="title">{slide.title}</div>
                <div class="content">{slide.content}</div>
            </div>
        </div>
    {/if}
    {/each}
    <div class="navigationButtons">
        <div class="button" style="background: {buttonColor};" on:click={() => { animatonCurrentDot.cancel(); currentSlide = currentSlide - 1 < 0 ? content.length - 1 : currentSlide - 1;}}>&#10094;</div>
        <div class="button" style="background: {buttonColor};" on:click={() =>{ animatonCurrentDot.cancel(); currentSlide = currentSlide + 1 >= content.length ? 0 : currentSlide + 1;}}>&#10095;</div>
    </div>
    <div class="navigationDots">
        {#each content as _slide, id}
        <div class="button {currentSlide === id? 'active' : ''}"  style="background: {textColor}80;" on:click={() => { animatonCurrentDot.cancel(); currentSlide = id;}}>
            {#if currentSlide === id}
            <div class="progress"  style="background-color: {textColor};"/>
            {/if}
        </div>
        {/each}
    </div>
</div>




<style>
    .img-slider{
        position: relative;
        width: 800px;
        height: 300px;
        margin: 10px;
    }
    .img-slider .slide{
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }

    .img-slider .slide .img{
        z-index: 1;
        width: 100%;
    }

    .img-slider .slide .info{
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        position: absolute;
        top: 0;
        padding: 15px 30px;
        height: 100%;
    }

    .img-slider .slide .info .title{
        font-size: 16px;
        font-weight: 700;

        margin-top: 20px;
        margin-bottom: 20px;
    }

    .img-slider .slide .info .content{
        font-size: 16px;
        width: 100%;

        border-radius: 5px;
        max-height: 170px;
        overflow: hidden;
    }

    .img-slider .navigationDots{
        z-index: 2;
        position: absolute;
        display: flex;
        bottom: 30px;
        padding-left: 30px;
    }

    .img-slider .navigationDots .button{
        width: 12px;
        height: 12px;
        margin-right: 10px;
        border-radius: 50%;
        cursor: pointer;
        transition: width 0.1s;
    }

    .img-slider .navigationDots .button.active{
        width: 90px;
        border-radius: 10px;
        align-items: center;
        justify-content: flex-start;
        display: flex;
        position: relative;
        z-index: 1;
        transition: width 0.5s;
    }

    .img-slider .navigationDots .button.active .progress{
        opacity: 1 !important;
        position: flex;
        width: 0;
        height: 12px;
        border-radius: 10px;
        z-index: 2;
    }

    .img-slider .navigationDots .button:hover{
        opacity: 1 !important;
    }

    .img-slider .navigationButtons{
        z-index: 2;
        position: absolute;
        display: flex;
        top: 30px;
        right: 0%;
        transform: translateX(-25%);
        align-items: center;
    }

    .img-slider .navigationButtons .button{
        border: rgba(0, 0, 0, 0.1) solid 1px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        margin-left: 10px;
        text-align: center;
        line-height: 40px;
    }
    .img-slider .navigationButtons .button:hover{
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 830px){
        .img-slider{
            width: 600px;
            height: 375px;
        }

        .img-slider .slide .info{
            padding: 10px 25px;
        }

        .img-slider .slide .info .title{
            font-size: 35px;
        }

        .img-slider .slide .info .content{
            font-size: 15px;
            max-height: 220px;
        }

        .img-slider .navigationDots{
            bottom: 25px;
        }

        .img-slider .navigationDots .button{
            width: 10px;
            height: 10px;
            margin: 8px;
        }
        .img-slider .navigationDots .button.active{
            width: 90px;
        }
        .img-slider .navigationDots .button.active .progress{
            height: 10px;
        }
    }

    @media (max-width: 620px){
        .img-slider{
            width: 400px;
            height: 250px;
        }

        .img-slider .slide .info{
            padding: 10px 20px;
        }

        .img-slider .slide .info .title{
            font-size: 30px;
        }

        .img-slider .slide .info .content{
            font-size: 13px;
            max-height: 120px;
        }

        .img-slider .navigationDots{
            bottom: 15px;
        }

        .img-slider .navigationDots .button{
            width: 8px;
            height: 8px;
            margin: 6px;
        }
        .img-slider .navigationDots .button.active{
            width: 70px;
        }
        .img-slider .navigationDots .button.active .progress{
            height: 8px;
        }
        .img-slider .navigationButtons .button{
            width: 35px;
            height: 35px;
        }
        .img-slider .navigationButtons .button{
            width: 35px;
            height: 35px;
            line-height: 35px;
        }
    }

    @media (max-width: 420px){
        .img-slider{
            width: 320px;
            height: 200px;
        }

        .img-slider .slide .info{
            padding: 5px 10px;
        }

        .img-slider .slide .info .title{
            font-size: 25px;
        }

        .img-slider .slide .info .content{
            font-size: 11px;
            max-height: 90px;
        }

        .img-slider .navigationDots{
            bottom: 10px;
        }
        .img-slider .navigationButtons .button{
            width: 30px;
            height: 30px;
            line-height: 30px;
        }
    }
</style>