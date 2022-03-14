<script lang="ts">

    let milestonesWidth: number;

    $: console.log(milestonesWidth);

/*
    <div class="svg-line">
        <svg class="line" height="4px" width={milestonesWidth-300}>
            <line x1="100" y1="0" x2={milestonesWidth-300} y2="0"/>
        </svg>
    </div>

*/

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
        color: #F1C0B5;
        font-size: 16px;
        line-height: 24px;
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