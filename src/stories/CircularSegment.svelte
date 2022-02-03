<script lang="ts">

    export let startAngle : number;
    export let endAngle : number;
    export let radius : number;
    export let thickness ;
    export let x : number;
    export let y : number;
    export let color = '#fbe26b'
    export let borderColor = 'black'
    export let gap = 0;
    export let selected;
    export let thicknessGain = 20;

    let currentThicknessGain = thicknessGain;
    let currentThickness = thickness;
    let current = false;

    interface PlotHTMLElement extends HTMLElement  {
        on(eventName: string, handler: Function): void;
    }

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

    $: if(selected !== null && selected.startAngle == startAngle && !current){
        current = true;
        let animation = document.querySelector('#selectionStart' + startAngle) as SVGAnimationElement;
        console.log(animation)
        animation.beginElement();

    }else{

        if(current){
            let animation = document.querySelector('#selectionEnd' + startAngle) as SVGAnimationElement;
            console.log(animation);
            animation.beginElement();
        }
        current = false;

    }
</script>


<path class="segment" fill={color} stroke={borderColor} d={describeArc(x,y,radius,currentThickness,startAngle + gap/2 ,endAngle - gap/2)} on:click>
    <animate begin="mouseover" attributeName="d" to={describeArc(x,y,radius,currentThickness + currentThicknessGain,startAngle + gap/2 ,endAngle - gap/2)} dur="0.3s" fill="freeze"/>
    {#if !current}
    <animate begin="mouseout" attributeName="d" to={describeArc(x,y,radius,currentThickness,startAngle + gap/2 ,endAngle - gap/2)} dur="0.3s" fill="freeze"/>
    {/if}
    <animate begin="indefinite" attributeName="d" to={describeArc(x,y,radius,currentThickness,startAngle + gap/2 ,endAngle - gap/2)} dur="0.3s" fill="freeze" id='selectionEnd{startAngle}'/>
    <animate begin="indefinite" attributeName="d" to={describeArc(x,y,radius,currentThickness + currentThicknessGain,startAngle + gap/2 ,endAngle - gap/2)} dur="0.3s" fill="freeze" id='selectionStart{startAngle}'/>
</path>

<style>
    .segment{
        cursor: pointer;
    }
</style>