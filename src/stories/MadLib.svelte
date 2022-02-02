<script lang="ts">
    import DropdownArrow from "./DropdownArrow.svelte";
    import MadLibSelector from "./MadLibSelector.svelte";
    export let variable: number;

    let listboxVisible = false;
    let buttonText = "MPA manager"

const click = () => {
    buttonText = "help finding examples"
}


</script>

<div class="component" on:click={click}>
    <p class="title-text">Is this not for you?</p>
    <p>I am an <MadLibSelector/> and want <br> <MadLibSelector/> to <MadLibSelector/> decisions <br> <MadLibSelector/></p>

    <div class="find-button">
        Let's find what you need
    </div>
</div>

<style>

.component {
    margin-left: 200px;
    position: relative;
    line-height: 40px;
    color: #6C767D;
    background-color: #F9F9F9;
    box-shadow: inset 0px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 40px 0px 0px 40px;
    padding-top: 0.5rem;
    padding-bottom: 2rem;
    padding-left: 1.5rem;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 20px;
    font-weight: normal;
}

.title-text {
    color: black;
    font-weight: 700;
    font-size: 16px;
    margin: 0;
}

.find-button {
    font-weight: 700;
    vertical-align: middle;
    font-size: 16px;
    position:absolute;
    right:0;
    bottom: 0;
    align-content: center;
    background: #FBE26B;
    color: black;
    padding: 0.1rem 1rem;
    border-radius: 20px 0px 0px 0px;
    filter: drop-shadow(0px -2px 8px rgba(0, 0, 0, 0.1));
}

</style> 

