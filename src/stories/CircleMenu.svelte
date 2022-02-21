<script lang='ts'>
import { element } from 'svelte/internal';

    import CircularSegment from './CircularSegment.svelte';

   //         radius = {args.radius}
   //         thickness = {args.thickness}
    //        x = {args.x}
    //        y = {args.y}
    //        color = {args.color}
    //        borderColor = {args.borderColor}
    export let data : MenuElement[];
    export let config : CircleMenuConfig;

    let currentPageIndex = config.initialIndex;
    let currentGroup = data[currentPageIndex].group;

    enum ColorSelector {
        border,
        fill
    }

    interface Segment {
        startAngle : number;
        endAngle : number;
        element : MenuElement;
    }
    interface MenuElement {
        percentatge : number;
        group : number;
        title : string;
    }

    interface CircleMenuThickness{
        unselected : number;
        group : number;
        selected : number;
    }

    interface CircleMenuColors{
        selected : string;
        unselected : string;
        border : string;
    }

    interface CircleMenuConfig{
        radius : number;
        thickness : CircleMenuThickness
        x : number;
        y : number;
        gap : number;
        color : CircleMenuColors;
        initialIndex: number;
    }

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
        currentGroup = data[currentPageIndex].group;
    }
    let menuSegments = calcSegments();
</script>

<svg width="400" height="400">
    {#each menuSegments as segment, i}
    <CircularSegment
        bind:this={segment.ref}
        startAngle = {segment.startAngle}
        endAngle = {segment.endAngle}
        radius = {config.radius}
        thickness = {data[currentPageIndex].group === segment.element.group ? config.thickness.group : config.thickness.unselected}
        gap = {config.gap}
        x = {config.x}
        y = {config.y}
        color = {currentPageIndex === i || data[currentPageIndex].group === segment.group? config.color.selected : config.color.unselected}
        borderColor = {currentPageIndex === i || data[currentPageIndex].group === segment.group? config.color.selected : config.color.unselected}
        selected = {currentPageIndex === i}
        onClickFn = {() => {handleSegmentClick(i)}}
    />
    {/each}
</svg>