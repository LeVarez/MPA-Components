<script lang="ts">
    import TagContainer from "./TagContainer.svelte";
    import { boop } from './Animations.svelte';
    import type { cardParameters } from "./interfaces";
    
    export let parameters: cardParameters;

    let isBooped = false;
    let render = true;

    function setIsBooped(val){
        isBooped = val;
    }

    function handleClick() {
        alert("CARD CLICKED");    
    }

</script>

<div class={parameters.cardType === 'chapter' ? 'container chapter' : 'container case-study'} tabindex="0">
    <div class="preview-image">
        <img class="image" width="766" height="344" src={parameters.previewImage} alt="preview">
    </div>
    <div class="preview-content">
        <div class="circle-button" tabindex="0" on:mouseenter={() => isBooped = true} on:click={handleClick} on:mouseleave={() => isBooped = false}>
            {#if render}
                <span use:boop={{isBooped, x: 5, timing: 200, setter: setIsBooped}}>
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                        <path d="M1.1814 19L9.81849 10L1.1814 1" stroke="#2A2A2A" stroke-width="2.4"/>
                    </svg>
                </span>   
            {/if}     
        </div>
        <div class="preview-category-text">{parameters.category}</div>
        <div class="preview-title">{@html parameters.title}</div>
        <div class="tags-title">What's this about?</div>
        <TagContainer tags={parameters.tags} width={600}/>
    </div>
</div>

<style>

    .circle-button {
        float: right;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: #FBE26B;
        box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.15);
        margin-right: 1.5rem;
        margin-top: 0.25rem;
        cursor: pointer;
        outline-color: white;
    }

    .tags-title {
        margin-top: 2rem;
        margin-bottom: 0.75rem;
        font-weight: 700;
        font-size: 16px;
    }

    .preview-title {
        font-weight: 275;
        font-size: 32px;
        max-width: 570px;
        margin-top: 0px;
        max-height: 120px;
        text-overflow: clip;
        word-wrap: break-word;
        overflow: hidden;
    }

    .preview-category-text {
        font-weight: 700;
        font-size: 20px;
        max-width: 720px;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }

    .preview-content {
        font-family: 'Montserrat';
        color: #FFFFFF;
        padding-left: 1.5rem;
    }

    .image {
        border-radius: 40px 40px 0px 0px;
    }

    .container {
        width: 766px;
        height: 671px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
        border-radius: 40px;
        border: none;
    }

    .chapter {
        background: #096EAE;
        outline-color: black;
    }

    .case-study {
        background: #311E5D;
    }

    .preview-image {
        max-width: 1000px;
        max-height: 500px;
        width: auto;
        height: auto;
        
    }
    
</style>