<script lang="ts">

    import Milestone from "./Milestone.svelte";

    let milestonesWidth: number;


</script>

<div class="container" bind:clientWidth={milestonesWidth}>
    <div class="title-container">
        <div class="title">
            <div class="grid-item-first">
                <div class="property-name">
                    Milestones
                </div>
            </div>
        </div>
    </div>

    <svg class="svg">
        <line class="svg-line" x1="0" y1="50%" x2="100%" y2="50%"/>
    </svg>

    <div class="milestones-grid">
        <Milestone/>
    </div>

</div>

<style>

    .milestones-grid {
        padding-left: 100px;
    }

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
        display: grid;
        grid-template-columns: 325px 225px 425px 325px; /* This has to sum a total of 1.300px*/
        padding-left: 100px;
        padding-right: 100px;
    }


    .grid-item-first {
        text-align: left;
        padding: 20px;
    }

    .property-name {
        font-family: 'Montserrat';
        font-weight: bold;
        color: #FFFFFF;
        font-size: 16px;
        line-height: 24px;
    }

    .svg-line {
        stroke:#FBE26B;
        stroke-width:3;
    }

    .svg {
        height:5px;
        width:100%;
        margin-top: 34px;
    }

    .container {
        position: relative;
        margin-top: 25px;
        width: 100%;
        height: 350px;
        background: #04558E;
        box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);
        padding-bottom: 50px;
    }

    .milestone-point {
        width: 7px;
        height: 7px;
        background: #096EAE;
        border: 3px solid #FBE26B;
    }
    
</style>