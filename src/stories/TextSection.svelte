<script lang="ts">
    import { fade, fly, slide } from 'svelte/transition'

    export let title = "No Title";
    export let content = ["No content defined"];
    export let buttonText = "Learn More";
    export let numShowedParagraph = 3;

    let currentShowedParagraph = numShowedParagraph;

    let width, height;
</script>

<div class="article" bind:clientWidth={width} bind:clientHeight={height} style="width: {width}px; height: {height};">
    <div class="title">{title}</div>
    <div class="content">
        {#each content as p, i}
            {#if i < currentShowedParagraph}
            <p transition:slide class="paragraph">
                {p}
            </p>
            {/if}
        {/each}
    </div>
    {#if numShowedParagraph < content.length}
    <hr>
    <div
    class="{currentShowedParagraph === content.length? "readLessButton": "readMoreButton"} readButton"
    on:click={
    () => {
        if(currentShowedParagraph === content.length) currentShowedParagraph=numShowedParagraph;
        else currentShowedParagraph = content.length;
    }}>
        <div class="buttonArrow">&#10094</div>
        <div class="text">{ @html currentShowedParagraph === content.length? "<b>Read less</b>" : buttonText}</div>
    </div>
    {/if}
</div>

<style>
    hr{
        margin-bottom: 0;
    }
    .article{
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }

    .article .title{
        font-size: 45px;
    }

    .article .content{
        font-size: 15px;
    }

    .article .readButton{
        background-color: #f9f9f9;
        display: inline-flex;
        width: auto;
        box-shadow: 2px 2px 3px rgb(187, 187, 187), -2px 2px 3px rgb(187, 187, 187);
        border-radius: 0px 0px 10px 10px;
        padding: 5px 10px 5px 10px;
        font-size: 12px;
        cursor: pointer;
    }

    .article .readMoreButton .buttonArrow{
        float: left;
        transform: rotate(-90deg);
        margin-right: 5px;
    }
    .article .readLessButton .buttonArrow{
        float: left;
        transform: rotate(90deg);
        margin-right: 5px;
    }
</style>