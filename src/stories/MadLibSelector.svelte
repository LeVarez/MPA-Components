<script lang="ts">
    import DropdownArrow from "./DropdownArrow.svelte";

    let buttonText = "MPA manager";
    let listboxVisible = false;

    const click = () => {
        listboxVisible = !listboxVisible;
    }

</script>

<div class="selector-area" on:click={click}>
    <div class="arrow">
        <DropdownArrow/>
    </div>
    {buttonText}
</div>

<div class={listboxVisible ? "listbox-visible" : "listbox-hidden"}>
    <div class="selector-option" on:click={click}>
        {buttonText}
    </div>
    <div class="selector-option" on:click={click}>
        {buttonText}
    </div>
    <div class="selector-option" on:click={click}>
        {buttonText}
    </div>
</div>   


<style>

    .selector-option {
        display: block;
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

    .listbox-visible {
        position: absolute;
        display: block;

    }

    .listbox-hidden {
        display: none;
    }

    .arrow {
        display: inline-block;
        vertical-align: top;
    }

</style>
