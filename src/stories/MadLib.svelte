<script lang="ts">
    import MadLibSelector from "./MadLibSelector.svelte";
    export let variable: number;

    const findButtonClicked = () => {}

    const userPersonaItems = ['an MPA planner', 'an MPA manager', 'a community organizer', 'LMMA practitioner'];
    const objectiveItems = ['answers', 'examples', 'case studies', 'tools'];
    const objectiveVerbItems = ['enable', 'evaluate'];
    const actionSubjectItems = ['I need to make','my team will make','my government needs to make'];

</script>

<div class="mad-lib">
    <p class="title-text">Is this not for you?</p>
    <p class="normal-text">I am an <MadLibSelector/> and want <br> <MadLibSelector/> to <MadLibSelector/> decisions <br> <MadLibSelector/></p>
    <button class="find-button" tabindex="0" on:click={findButtonClicked}>
        Let's find what you need
        <svg class="svg-arrow" width="13" height="8" viewBox="0 0 13 8" fill="none">
            <path d="M0.630249 1L6.36134 6.5L12.0924 1" stroke="#2A2A2A" stroke-width="1.5"/>
        </svg>
    </button>
</div>

<style>

.mad-lib {
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

.normal-text {
    margin-top: 0.5rem;
}

.find-button {
    display: inline-block;
    cursor: pointer;
    font-weight: 700;
    vertical-align: middle;
    font-family: 'Montserrat';
    border: none;
    font-size: 16px;
    position:absolute;
    right:0;
    bottom: 0;
    align-content: center;
    background: #FBE26B;
    color: black;
    padding: 0.55rem 0.2rem 0.45rem 1.25rem;
    border-radius: 20px 0px 0px 0px;
    filter: drop-shadow(0px -2px 8px rgba(0, 0, 0, 0.1));
}

.svg-arrow {
    position: relative;
    vertical-align: middle;
    padding-left: 0.7rem;
    transform: rotate(-90deg) scale(1.35) translateX(-0.25rem);
    overflow: hidden;
}


</style> 

