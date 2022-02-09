<script lang='ts'>
  import {Splide, SplideSlide} from "@splidejs/svelte-splide";
  import { onMount } from "svelte";

  export let backgroundColor = '#fbe26b';
  export let buttonColor = '#fbe26b';
  export let textColor = '#202020';

  export let slides:Slide[] = [];

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

  }
  let handleNextButton = () => {

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