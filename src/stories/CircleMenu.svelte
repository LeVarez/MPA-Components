<script>
    import CircularSegment from './CircularSegment.svelte';

   //         radius = {args.radius}
   //         thickness = {args.thickness}
    //        x = {args.x}
    //        y = {args.y}
    //        color = {args.color}
    //        borderColor = {args.borderColor}
    export let data;
    export let radius = 100;
    export let thickness = 20;
    export let x = 150;
    export let y = 150;
    export let gap = 3;
    export let color = "#fbe26b";
    export let borderColor = "#fbe26b";



    let calcSegments = () => {
        let menuSegments = [];
        let currentAngle = 0;
        console.log(data)
        data.forEach(element => {
            let segment = {
                startAngle: currentAngle,
                endAngle: currentAngle + (360 * element.percentatge) / 100,
            }
            currentAngle = segment.endAngle;
            menuSegments.push(segment);
        });
        return menuSegments
    }

    let menuSegments = calcSegments();

</script>

<svg width="400" height="400">
    {#each menuSegments as segment}
    <CircularSegment
        startAngle = {segment.startAngle}
        endAngle = {segment.endAngle}
        radius = {radius}
        thickness = {thickness}
        gap = {gap}
        x = {x}
        y = {y}
        color = {color}
        borderColor = {borderColor}
    />
    {/each}
</svg>