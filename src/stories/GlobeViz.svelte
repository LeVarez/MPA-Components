<script lang="ts">
    import * as d3 from "d3-geo";
    import { onMount } from "svelte";
    import { feature } from "topojson";
    import worlddata from "./110m.json";

    export let yaw: number;
    export let pitch: number;
    export let roll: number;
    export let highlight: {lat: number, lon: number};
    export let width: number = 500;

    let landPath;
    const projection = d3.geoOrthographic();
    projection.rotate([yaw, pitch, roll]);
    projection.scale(width/2);
    projection.translate([width/2, width/2]);
    const path = d3.geoPath().projection(projection);

    let circleGenerator = d3.geoCircle()
      .center([highlight.lat, highlight.lon])
      .radius(2);

    let circle = circleGenerator();
    let circlePath = path(circle);

    let externalCircleGenerator = d3.geoCircle()
      .center([highlight.lat, highlight.lon])
      .radius(4);
    let externalCircle = externalCircleGenerator();
    let externalCirclePath = path(externalCircle);

    let graticuleGenerator = d3.geoGraticule()
      .step([10,10]);

    let graticules = graticuleGenerator();
    let graticulePath = path(graticules);

    onMount(async function() {
      const response = worlddata;
      const json = response;
      const land = feature(json, json.objects.land);
      landPath = path(land);
    });

</script>


<div class="globe">
  <svg width={width} height={width}>
    <path d={graticulePath} class="graticules"></path>
    <path d={landPath} class="land"/>
    <path d={circlePath} class="circle"></path>
    <path d={externalCirclePath} class="external-circle"></path>
  </svg>
</div>


<style>

  .external-circle {
    stroke: #FCE587;
    stroke-width: 1.25px;
    fill:none;
  }

  .circle {
    stroke-width: 0px;
    fill: #FCE587;
  }

  .graticules {
    fill: none;
    stroke-width: 0.25px;
    stroke: #444444;
  }

  svg {
    background: #6d608d;
    border-radius: 50%;
  }

  .land {
    stroke-width: 0px;
    fill: #493870;
  }
  </style>