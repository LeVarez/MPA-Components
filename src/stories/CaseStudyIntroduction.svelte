<script lang="ts">
    import PageTopSearch from "./PageTopSearch.svelte";
    import GlobeViz from "./GlobeViz.svelte";
    import Milestones from "./Milestones.svelte";
    import CaseStudyCover from "./CaseStudyCover.svelte";

    import type { caseStudyParameters } from "./interfaces";
    
    export let parameters: caseStudyParameters;

    //<img class="background-image" src={parameters.backgroundImagePath} alt="background">
    //<div class="search-bar"><PageTopSearch/></div>
    //<div class="title2">{@html parameters.title}</div>

</script>

<header>
    <CaseStudyCover></CaseStudyCover>
</header>

<div class="information-container">
    <div class="grid-container-first">
        <div class="grid-item-first">
            <div class="property-name">Name</div>
            <div class="property-value-first">{@html parameters.name}</div>
        </div>
        <div class="grid-item-first">
            <div class="property-name">Established in</div>
            <div class="property-value-first">{@html parameters.established}</div>
        </div>
        <div class="grid-item-first">
            <div class="property-name">Size</div>
            <div class="property-value-first">{@html parameters.size}</div>
        </div>
        <div class="globe">
            <GlobeViz
                width={245}
                highlight={parameters.highlight}
            />
        </div>
    </div>

    <div class="grid-container-second">
        <div class="grid-item-second">
            <div class="property-name">Governance</div>
            <div class="property-value-second">{@html parameters.governance}</div>
        </div>
        <div class="grid-item-second">
            <div class="property-name">Staff</div>
            <div class="property-value-second">{@html parameters.staff}</div>
        </div>
        <div class="grid-item-second">
            <div class="property-name">Budget</div>
            <div class="property-value-second">{@html parameters.budget}</div>
        </div>
        <div class="grid-item-second">
            <div class="property-name">Budget level</div>
            <div class="property-value-second">{@html parameters.b_level}</div>
        </div>
    </div>

    <Milestones></Milestones>
</div>



<style>

    .landing-container {
        position: static;
        height: 720px;
    }

    .search-bar {
        position: absolute;
        top: 100px;
        right: 100px;
        z-index: 500;
    }

    .title {
        font-family: Montserrat;
        font-style: normal;
        font-size: 68px;
        line-height: 83px;
        color: #FFFFFF;
        max-width: 625px;
        bottom: 50px;
        left: 50vw;
        transform: translateX(-630px);
        text-align: left;
    }

    .title2 {
        padding-top: 200px;
        font-family: Montserrat;
        font-style: normal;
        font-size: 68px;
        line-height: 83px;
        color: #FFFFFF;
        max-width: 625px;
        text-align: left;
    }

    .title-container {
        height: 720px;
        position: relative;
        display: block;
        top: 0;
    }

    :global(sup) {
        font-size: 0.6em;
        vertical-align: top;
        position: relative; 
        top: -0.5em;
    }

    .background-image {
        width: 100vw;
        height: auto;
        /*object-fit: cover;
        vertical-align: middle;*/
    }

    .information-container {
        position: static;
        padding-top: 35px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-start;
        align-items: center;
        background: #311E5D;
        width: 100%;
        box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
    }

    .grid-container-first {
        display: grid;
        grid-template-columns: 325px 225px 425px 325px; /* This has to sum a total of 1.300px*/
        padding-left: 100px;
        padding-right: 100px;
    }

    .grid-item-first {
        text-align: left;
        padding: 20px;
    }

    .grid-container-second {
        display: grid;
        grid-template-columns: 325px 325px 325px 325px;
        padding-left: 100px;
        padding-right: 100px;
    }

    .grid-item-second {
        text-align: left;
        padding: 20px;
    }

    .globe {
        transform: translate(975px, -122.5px);
        position: absolute;
    }

    .property-value-first {
        font-family: 'Bitter';
        font-size: 28px;
        line-height: 42px;
        color: white;
    }

    .property-value-second {
        font-family: 'Bitter';
        font-size: 18px;
        line-height: 32px;
        color: white;
    }

    .property-name {
        font-family: 'Montserrat';
        font-weight: bold;
        color: #F1C0B5;
        font-size: 16px;
        line-height: 24px;
    }
    
</style>