<script>
    import { createEventDispatcher } from 'svelte'
    import Dot from './Dot.svelte'
    import Page from './Page.svelte';

    export let progress = false;

    const dispatch = createEventDispatcher()

    /**
     * Amount of pages (amount of dots)
     */
    export let pagesCount = 1

    /**
     * Index of the current page
     */
    export let currentPageIndex = 0

    export let color = 'black';

    function handleDotClick(pageIndex) {
      dispatch('pageChange', pageIndex)
    }
  </script>

  <div class="sc-carousel-dots__container">
    {#each Array(pagesCount) as _, pageIndex (pageIndex)}
      <div class="sc-carousel-dots__dot-container">
        <Dot
          progress={progress}
          active={currentPageIndex === pageIndex}
          color={color}
          on:click={() => handleDotClick(pageIndex)}
          on:progressAnimationFinished={() => handleDotClick(currentPageIndex + 1)}
        ></Dot>
      </div>
    {/each}
  </div>

  <style>
    .sc-carousel-dots__container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0 30px;
    }
    .sc-carousel-dots__dot-container {
      height: calc(var(--dot-size) + 14px);
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
    }
  </style>