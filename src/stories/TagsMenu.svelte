<script lang='ts'>
    import TagContainer from './TagContainer.svelte';
    import CircleMenu from './CircleMenu.svelte';
    import type {TagsMenu, TagParameters} from '../interfaces';
    import type {CircleMenuConfig} from '../interfaces';


    export let data : TagsMenu;

    let width : number = 0;
    let initialCircularMenuConfig : CircleMenuConfig = JSON.parse(JSON.stringify(data.circularMenuConfig))

    data.wherein.map((e, i) => e.index = i);

    let menuData = data.wherein.map((tag : TagParameters, i : number) => {
        return {
            percentatge : 100 / (data.wherein.length),
            group : tag.group,
            title : tag.tag
        }
    });

    let currentPageIndex = 0;
    let currentTagIndex = 0;
    let wherein = data.wherein.filter((e) => data.wherein[currentPageIndex].group == e.group);




    let resizeObjectProperties = function(multiplier : number) {
        data.circularMenuConfig.x = initialCircularMenuConfig.x * multiplier;
        data.circularMenuConfig.y = initialCircularMenuConfig.y * multiplier;
        data.circularMenuConfig.radius = initialCircularMenuConfig.radius * multiplier;
        data.circularMenuConfig.width = initialCircularMenuConfig.width * multiplier;
        data.circularMenuConfig.height = initialCircularMenuConfig.height * multiplier;
        data.circularMenuConfig.thickness.gain = initialCircularMenuConfig.thickness.gain * multiplier;
        data.circularMenuConfig.thickness.group = initialCircularMenuConfig.thickness.group * multiplier;
        data.circularMenuConfig.thickness.unselected = initialCircularMenuConfig.thickness.unselected * multiplier;
    };

    let resizeElements = () => {
        if(width > 900) {
        data.circularMenuConfig = JSON.parse(JSON.stringify(initialCircularMenuConfig));
        }
        else{
            resizeObjectProperties(0.5);
        }
    }

    $: if(currentPageIndex || currentPageIndex === 0){
        wherein = data.wherein.filter((e) => data.wherein[currentPageIndex].group == e.group);
    }



    $: if (width) {
        resizeElements();
    }

    $: console.log(currentTagIndex)

</script>
<svelte:window bind:innerWidth={width}></svelte:window>
<div class='container'>
    <h5 class='title'>Where in the MPA lifecycle?</h5>
    <div class="circleMenuSection">
        <div class="circleMenu">
            <CircleMenu
                data={menuData}
                bind:config={data.circularMenuConfig}
                bind:currentPageIndex={currentPageIndex}
            ></CircleMenu>
        </div>
        <div class="tagContainer"><TagContainer tags={wherein} width={285} bind:selectedIndex={currentPageIndex}/></div>
    </div>
    <h5 class='title'>What&apos;s this about</h5>
    <div class="tagContainer"><TagContainer tags={data.whatsabout} width={285}  carousel={width <= 900? true : false}/></div>
    <h5 class='title'>Good for ...</h5>
    <div class="tagContainer"><TagContainer tags={data.goodfor} width={285}  carousel={width <= 900? true : false}/></div>

</div>

<style>
    .container{
        width: 294px;
        height: 650px;
        background: #66CFD6;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        padding-bottom: 20px;
    }
    .circleMenu{
        margin: 0 auto !important;
        width: fit-content;
    }
    .title{
        width: 145px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        padding-left: 20px;
        padding-top: 20px;
        padding-bottom: 0px;
        margin-bottom: 10px;
        margin-top: 0px;
    }
    .tagContainer{
        margin-left: 20px;
        margin-right: 20px;
    }

    @media (max-width: 900px) {
        .container{
            width: 372px;
            height: 372px;
        }
        .title{
            width: auto;
            font-size: 10px;
        }
        .circleMenu{
            margin: 0 !important;
            width: fit-content;
        }
        .circleMenuSection{
            display: grid;
            grid-template-columns: auto auto;
        }
        .circleMenuSection .tagContainer{
            text-align: center;
        }
    }

</style>