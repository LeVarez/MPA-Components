<script lang="ts">
    import DropdownArrow from "./DropdownArrow.svelte";
    import { scale } from 'svelte/transition';

    let buttonText = "MPA manager";
    let choosing = false;
    let listboxVisible = false;
    let option1 = "MPA manager";
    let option2 = "parent or caregiver";
    let option3 = "teacher";

    const openDropdown = () => { listboxVisible = true; }

    const closeDropdown = () => { listboxVisible = false; }

    const clickSelectorOption = (option:string) => {
        buttonText = option;
        closeDropdown();
    }

    const endHover = () => { choosing = false; }

    const beginHover = () => { choosing = true; }

</script>

<div class="area">
    <div tabindex="0" class="selector-area" 
        on:click={listboxVisible ? closeDropdown : openDropdown} on:blur={choosing ? () => {} : closeDropdown}>
        <div class="arrow">
            <svg class="svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                <path d="M0.630249 1L6.36134 6.5L12.0924 1" stroke="#2A2A2A" stroke-width="1.5"/>
            </svg>
        </div>
        {buttonText}
    </div>      

    {#if listboxVisible}
        <div class="listbox" transition:scale on:mouseenter={beginHover} on:mouseleave={endHover}>
            <div class="option" on:click={() => clickSelectorOption(option1)}>
                {option1}
            </div>  
            <div class="option" on:click={() => clickSelectorOption(option2)}>
                {option2}
            </div>
            <div class="option" on:click={() => clickSelectorOption(option3)}>
                {option3}
            </div>
        </div>      
    {/if}

</div>

  
<style>

    .area {
        display: inline-block;
        line-height: 100%;
    }

    .option {
        display: block;
        background-color: #F9F9F9;
        color: black;
        border: none;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        cursor: pointer;
        font-family: 'Montserrat';
        font-size: 20;
        font-weight: normal; 
    }

    .option:selected {
        border: khaki;
    }


    .option:hover{
        filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.15));
        border-radius: 10px;
    }

    .selector-area {
        display: inline-block;
        vertical-align: middle;
        border-radius: 20px;
        background-color: #F9F9F9;
        color: black;
        border: none;
        padding: 0.35rem 0.7rem 0.35rem 0.7rem;
        cursor: pointer;
        filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.15));
        font-family: 'Montserrat';
        font-size: 20;
        font-weight: normal;
    }

    .listbox {
        margin-top: 0.5rem;
        position: absolute;
        display: block;
        filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.15));
        padding: 0.35rem 0.7rem 0.35rem 0.7rem;
        border-radius: 20px;
        background-color: #F9F9F9;
        color: black;
        border: none;
        z-index: 1000;
    }

    .arrow {
        display: inline-block;
        vertical-align: top;
    }

    .svg {
        vertical-align: middle;
        transform: translateY(-0.1rem);
    }

</style>
