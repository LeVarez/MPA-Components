<script lang="ts">
    import * as d3 from "d3-geo";
    import { onMount } from "svelte";
    import { feature } from "topojson";
    import worlddata from "./110m.json";

    export let scale: number;
    export let coordinates: {lat: number, lon: number};

    let geoGenerator = ({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [[0.1278, 51.5074], [-74.0059, 40.7128]]
      }
    });

    let data;
    const projection = d3.geoOrthographic();
    projection.rotate([coordinates.lat, coordinates.lon]);
    projection.scale(scale);
    const path = d3.geoPath().projection(projection);

    let circleGenerator = d3.geoCircle()
      .center([-74.0059, 40.7128])
      .radius(5);

    let circle = circleGenerator();
    let circlePath = path(circle);

    let graticuleGenerator = d3.geoGraticule();
    let graticules = graticuleGenerator();
    let graticulePath = path(graticules);

    onMount(async function() {
        const response = worlddata;
        const json = response;
        const land = feature(json, json.objects.land);
        data = path(land);
    });
</script>


<svg>
  <path d={graticulePath} class="graticules"></path>
  <path d={data} class="border"/>
  <path d={circlePath} class="circle"></path>
</svg>

<style>

  .circle {

  }

  .graticules {
    fill: none;
    stroke-width: 0.15px;
    stroke: #444444;
  }

    svg {
      width: 1000px;
      height: 1000px;
      background-color: blue;
    }
    .border {
      stroke: #444444;
      stroke-width: 0rem;
    }
  </style>