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
    export let clickFn : () =>{};

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

    let de = describeArc(x,y,radius,thickness + 100,startAngle - gap ,endAngle + gap);
</script>


<path class="segment" fill={color} stroke={borderColor} d={describeArc(x,y,radius,thickness,startAngle + gap/2 ,endAngle - gap/2)} on:click={clickFn}>
    <animate begin="mouseover" attributeName="d" to={describeArc(x,y,radius,thickness + 20,startAngle + gap/2 ,endAngle - gap/2)} dur="0.3s" fill="freeze"/>
    <animate begin="mouseout" attributeName="d" to={describeArc(x,y,radius,thickness,startAngle + gap/2 ,endAngle - gap/2)} dur="0.3s" fill="freeze"/>
</path>

<style>
    .segment{
        cursor: pointer;
    }
</style>