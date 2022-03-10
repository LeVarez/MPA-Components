<script lang="ts">

    let milestonesWidth: number;

    $: console.log(milestonesWidth);

    //    <svg class="svg" width={milestonesWidth-100} height="4" viewBox="0 0 {milestonesWidth-100} 4" fill="none">
        //<path d="M100 2H{milestonesWidth-100}" stroke="#F1C0B5" stroke-width="3"/>
    //</svg>

</script>

<div class="container" bind:clientWidth={milestonesWidth}>
    <div class="title-container">
        <div class="title">Milestones</div>
    </div>
    <div class="svg-line">
        <svg class="line" height="4px" width={milestonesWidth-300}>
            <line x1="100" y1="0" x2={milestonesWidth-300} y2="0"/>
        </svg>
    </div>

</div>

<style>

    .title-container {
        position: static;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-start;
        align-items: center;
        width: 100vw;
    }

    .title {
        margin-top: 25px;
        font-family: 'Montserrat';
        font-weight: bold;
        font-size: 20;
        color: #F1C0B5;
        width: 1300px;
        text-align: left;
        display: grid;
        padding-left: 120px;
        padding-right: 80px;
    }

    .svg-line {
        margin-top: 50px;
        stroke: #F1C0B5;
        stroke-width: 6px;
        fill: none;
    }

    .container {
        position: relative;
        margin-top: 25px;
        width: 100%;
        height: 350px;
        background: rgba(249, 249, 249, 0.12);
        box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);
    }

    
</style>