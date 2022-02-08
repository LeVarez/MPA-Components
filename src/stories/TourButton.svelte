<script lang="ts">
    import { boop } from './Animations.svelte';

    export let handleSubmit;

    let isBooped = false;

    function setIsBooped(val){
        isBooped = val;
    }

    function handleFocus(){
        isBooped = true;
    }

    function handleClick() {
		isBooped = true;
        handleSubmit();
	}

</script>

<div class="button" tabindex="0" on:mouseenter={() => isBooped = true} on:click={handleClick} on:focus={handleFocus}>
    <p class="text">Start your tour</p>
    <span use:boop={{isBooped, x: 5, timing: 200, setter: setIsBooped}}>
        <svg class="svg-arrow" width="13" height="22" viewBox="0 0 13 22" fill="none">
            <path d="M1.44165 20.5881L10.4526 11.0587L1.44165 1.52931" stroke="#2A2A2A" stroke-width="2.4"/>
        </svg>
    </span>        
</div>

<style>

    .text {
        display: inline-block;
        font-family: 'Montserrat';
        font-size: 20px;
        font-weight: bold;
        line-height: 40px;
        margin: 0px;
        color: #2A2A2A
    }

    .button {
        display: inline-block;
        position: relative;
        border-radius: 24px;
        padding: 0.3rem 1.5rem 0.3rem 1.35rem;
        border: none;
        background-color: #FBE26B;
        color: #2A2A2A;
        cursor: pointer;
        font-family: 'Montserrat';
        font-size: 20px;
        font-weight: bold;
        line-height: 40px;
        margin: 0px;
    }

    .svg-arrow {
        display: inline-block;
        position: relative;
        padding-left: 1rem;
        vertical-align: middle;
        transform: translateY(-0.15rem);
    }

</style>

