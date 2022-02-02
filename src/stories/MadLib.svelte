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

<div class="article" on:click={click}>
    <p>I am an <MadLibSelector/> and want help finding examples to evaluate decisions my governments needs to make</p>
</div>

<style>

.button {
    display: inline-block;
    vertical-align: middle;
    border-radius: 20px;
    background-color: #F9F9F9;
    font-size: 20;
    color: black;
    border: none;
    padding: 0.35rem 0.7rem 0.35rem 0.7rem;
    cursor: pointer;
    font: inherit;
    filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.15));
}

.arrow {
    display: inline-block;
    vertical-align: top;
}

.article {
    background-color: #F9F9F9;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 50px;
    font-family: 'Montserrat';
    font-size: 20;
    font-weight: normal;
}

</style> 

