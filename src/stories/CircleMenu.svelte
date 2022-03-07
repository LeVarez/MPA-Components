<script lang='ts'>

    import CircularSegment from './CircularSegment.svelte';
    import type {MenuElement, CircleMenuConfig, Segment} from '../interfaces';

    export let data : MenuElement[];
    export let config : CircleMenuConfig;
    export let currentPageIndex : number = 0;

    let width : number = config.width || 400;
    let height : number = config.height || 400;

    let calcSegments = () => {
        let menuSegments = [];
        let currentAngle = 0;

        data.forEach(element => {
            let segment = {
                startAngle: currentAngle,
                endAngle: currentAngle + (360 * element.percentatge) / 100,
                element: element
            } as Segment;
            currentAngle = segment.endAngle;
            menuSegments.push(segment);
        });
        return menuSegments
    }

    let handleSegmentClick = (index : number) => {
        currentPageIndex = index;
    }
    let menuSegments = calcSegments();

    $: if(config) {
        width = config.width || 400;
        height = config.height || 400;
    }
</script>


<svg style="width: {width}; height: {height};">
    {#each menuSegments as segment, i}
    {#if config}
    <CircularSegment
        bind:this={segment.ref}
        startAngle = {segment.startAngle}
        endAngle = {segment.endAngle}
        radius = {config.radius}
        thickness = {data[currentPageIndex].group === segment.element.group ? config.thickness.group : config.thickness.unselected}
        thicknessGain = {config.thickness.gain}
        gap = {config.gap}
        x = {config.x}
        y = {config.y}
        color = {data[currentPageIndex].group === segment.element.group? currentPageIndex === i? config.color.selected: config.color.selected : config.color.unselected}
        borderColor = {data[currentPageIndex].group === segment.element.group? currentPageIndex === i? config.color.selected: config.color.selected : config.color.unselected}
        selected = {currentPageIndex === i}
        transparency = {currentPageIndex !== i}
        onClickFn = {() => {handleSegmentClick(i)}}
        animationDuration = {config.animationDuration}
    />
    {/if}
    {/each}
</svg>

<style>
    svg{
        transition: width 1s, height 1s;
    }
</style>