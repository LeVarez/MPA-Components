<script lang='ts'>
import { onMount } from "svelte";
import { fade } from 'svelte/transition'
import { slide } from "svelte/types/runtime/transition";



interface TextElement{
		title: string;
		content: string;
}

export let content:TextElement[] = [];
export let color:string = '#fbe26b';
export let current:number = 3;




// Next/previous controls
const plusSlides = (n:number) => {

  if (current + n > content.length -1) {n = 0}
  else if (current + n < 0) {n = content.length - 1}
  else {n = current + n; console.log(3)}

  document.getElementsByClassName('content');
  showSlides(current = n);

}

// Thumbnail image controls
const currentSlide = (n:number) => {

  showSlides(current = n);
}

const showSlides = (n:number) => {
  var i;
  var slides = document.querySelectorAll<HTMLElement>(".mySlides");
  var dots = document.querySelectorAll<HTMLElement>(".dot");

  current = n;

}
onMount(() =>{
  showSlides(current);
})


</script>

<!-- Slideshow container -->
<div class="slideshow-container">


      <!-- Full-width images with number and caption text -->
      <div class="mySlides">
        <div class="top-section">
          <div class="title">{content[current].title}</div>
          <div class="controllButtons">
            <div class="prev" on:click={() => plusSlides(-1)} href="./">&#10094;</div>
            <div class="next" on:click={() => plusSlides(1)} href="./">&#10095;</div>
          </div>
        </div>
        <div class="content" in:fade>{content[current].content}</div>
      </div>




      <!-- Next and previous buttons -->

    <!-- The dots/circles -->
    <div style="text-align:center; float: left">
      {#each content as _current, i}
      <span class="dot" on:click={() => currentSlide(i)}></span>
      {/each}

    </div>
  </div>


<style>
    * {box-sizing:border-box}

    .top-section{
      height: 50px;
    }

    .title{
      width: 70%;
      float: left;
      border: 1px solid red;
      height: inherit;
    }

    /* Slideshow container */
    .slideshow-container {
      max-width: 1000px;
      position: relative;
      margin: auto;
    }

    /* Hide the images by default */
    .mySlides {

    }

    .controllButtons{
      border: 1px solid green;
      overflow: hidden; /* if you don't want #second to wrap below #first */
      height: inherit;
    }

    /* Next & previous buttons */
    .prev, .next {
      float: right;
      cursor: pointer;

      top: 50%;
      width: auto;
      margin-top: -22px;
      padding: 16px;
      color: rgb(0, 0, 0);
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
    }

    /* Position the "next button" to the right */
    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }



    /* The dots/bullets/indicators */
    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }

    .active, .dot:hover {
      background-color: #717171;
    }
</style>