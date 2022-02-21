<script lang="ts">
    import { onMount } from "svelte";
    import * as anime from 'animejs';

    //Desing properties
    export let startAngle : number;
    export let endAngle : number;
    export let radius : number;
    export let thickness ;
    export let x : number;
    export let y : number;
    export let color = '#fbe26b'
    export let borderColor = 'black'
    export let gap = 0;
    export let thicknessGain = 20;

    export let selected = false;
    export let onClickFn = () => {}

    let currentThicknessGain = thicknessGain;
    let currentThickness = thickness;

    let selectedAnimation : SVGAnimationElement;
    let unselectedAnimation : SVGAnimationElement;

    let animated = false;


    onMount(() => {

    })

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

    let handleMouseEnter = () => {
        animated = true;
        if(animated && !selected) {
            selectedAnimation.beginElement();
        }
    }
    let handelMouseLeave = () => {
        animated = true;
        if(animated && !selected) {
            animated = false;
            unselectedAnimation.beginElement();
        }


    }

    let selectedState : string = describeArc(x,y,radius, thickness + currentThicknessGain,startAngle + gap/2 ,endAngle - gap/2);
    let unselectedState : string = describeArc(x,y,radius, thickness,startAngle + gap/2 ,endAngle - gap/2);
    let initialState = describeArc(x,y,radius, thickness,startAngle + gap/2 ,endAngle - gap/2);

    $:
    if(selected && selectedAnimation) handleMouseEnter();
    else if(unselectedAnimation && thickness) handelMouseLeave();

    $:if(thickness && unselectedAnimation && !selected){
        unselectedState = describeArc(x,y,radius, thickness,startAngle + gap/2 ,endAngle - gap/2);

        unselectedAnimation.beginElement()
    }
</script>


<path class="segment shadow"
on:mouseenter={handleMouseEnter}
on:mouseleave={handelMouseLeave}
fill={color}
stroke={borderColor}
d={initialState}
on:click={onClickFn}>

    <animate bind:this={selectedAnimation} begin="indefinite" attributeName="d" to={selectedState} dur="1s" fill="freeze"/>
    <animate  bind:this={unselectedAnimation} begin="indefinite" attributeName="d" to={unselectedState} dur="1s" fill="freeze"/>

</path>

<style>
    .segment{
        cursor: pointer;
    }
    .shadow {

        filter: drop-shadow( 5px 5px 15px 5px #000000);
        /* Similar syntax to box-shadow */
    }
</style>