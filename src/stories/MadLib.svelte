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
    <p style="font-weight:bold">Is this not for you?</p>
    <p>I am an <MadLibSelector/> and want <br> <MadLibSelector/> to <MadLibSelector/> decisions <br> <MadLibSelector/></p>
</div>

<style>

.component {
    line-height: 35px;
    background-color: #F9F9F9;
    box-shadow: inset 0px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 40px 0px 0px 40px;
    padding-top: 0.5rem;
    padding-bottom: 100px;
    padding-left: 1.5rem;
    font-family: 'Montserrat';
    font-size: 20;
    font-weight: normal;
}

</style> 

