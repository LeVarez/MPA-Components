<script lang="ts">
    export let startAngle : number;
    export let endAngle : number;
    export let radius : number;
    export let thickness : number = 20 ;
    export let thicknessGain : number = 20;
    export let x : number;
    export let y : number;
    export let color : string= '#fbe26b'
    export let borderColor : string = 'black'
    export let gap : number = 0;
    export let transparency : boolean = false;
    export let animationDuration : number = 0.3;
    export let selected : boolean = false;
    export let onClickFn = () => {}

    let describeArc = (x:number, y:number, radius:number, thickness:number, startAngle:number, endAngle:number) => {

        let innerStart = polarToCartesian(x, y, radius, endAngle);
        let innerEnd = polarToCartesian(x, y, radius, startAngle);
        let outerStart = polarToCartesian(x, y, radius + thickness, endAngle);
        let outerEnd = polarToCartesian(x, y, radius + thickness, startAngle);

        let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        let d = [
            "M", outerStart.x, outerStart.y,
            "A", radius + thickness, radius + thickness, 0, largeArcFlag, 0, outerEnd.x, outerEnd.y,
            "L", innerEnd.x, innerEnd.y,
            "A", radius, radius, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
            "L", outerStart.x, outerStart.y, "Z"
        ].join(" ");

        return d;
    }

    let polarToCartesian = (centerX:number, centerY:number, radius:number, angleInDegrees:number) => {
        let angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    let selectedState : string = describeArc(x,y,radius, thickness + thicknessGain,startAngle + gap/2 ,endAngle - gap/2);
    let unselectedState : string = describeArc(x,y,radius, thickness,startAngle + gap/2 ,endAngle - gap/2);
    let currentState : string = unselectedState;

    $: if(thickness) {
        unselectedState = describeArc(x,y,radius, thickness,startAngle + gap/2 ,endAngle - gap/2);
        currentState = unselectedState;
    }

    $: if(selected) {
        currentState = selectedState;
    }
    else {
        currentState = unselectedState
    }

    $: if(radius) {
        selectedState = describeArc(x,y,radius, thickness + thicknessGain,startAngle + gap/2 ,endAngle - gap/2);
        unselectedState = describeArc(x,y,radius, thickness,startAngle + gap/2 ,endAngle - gap/2);
        currentState = unselectedState;
    }

</script>

<path class="pointer shadow"
    class:transparency='{transparency}'
    fill={color}
    stroke={borderColor}
    d={currentState}
    on:click={onClickFn}
    on:mouseenter={() => {if(!selected)currentState = selectedState}}
    on:mouseleave={() => {if(!selected)currentState = unselectedState}}
    style="transition: d {animationDuration}s;"
/>

<style>
    .pointer{
        cursor: pointer;
    }
    .shadow {

        filter: drop-shadow( 3px 5px 2px rgb(0 0 0 / 0.4));
        /* Similar syntax to box-shadow */
    }
    .transparency{
        opacity: 0.7;
    }
</style>