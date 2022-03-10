<script lang="ts">
    
    //<img class="background-image" src={parameters.backgroundImagePath} alt="background">
    //<div class="search-bar"><PageTopSearch/></div>
    //<div class="title2">{@html parameters.title}</div>


    /*
    <div class="container" bind:clientWidth={width} bind:clientHeight={height}>
    <b>Port Honduras Marine Reserve</b> – effective co-management and financial diversification
</div>
    */

    let width, height;

</script>

<div class="container" bind:clientWidth={width} bind:clientHeight={height}>
    <b>Port Honduras Marine Reserve</b> – effective co-management and financial diversification
</div>

<style>

    .background-image {
        height:750px;
    }

    .title {
        position: relative;
    }

    .container {
        width: 100%;
        margin: 0;
        background-color: #cccccc;
        height: 750px;
    }

</style>