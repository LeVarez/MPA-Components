<script>
    import Grid from "svelte-grid";
    import gridHelp from "svelte-grid/build/helper/index.mjs";

const items = [
  {
    6: gridHelp.item({
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      draggable: false,
      max: { w: 2 },
    }),
    data: {/*YOUR DATE GOES HERE*/}
  },
];

const cols = [[1200, 6]];
</script>
<Grid gap={[10, 5]} {items} {cols} rowHeight={150} let:item let:dataItem>
  <div>{item.data}</div>
</Grid>
<style>
    :global(.svlt-grid-shadow) {
      /* Back shadow */
      background: pink;
    }
    :global(.svlt-grid-container) {
      /* Container color */
      background: #eee;
    }
    :global(.svlt-grid-resizer::after) {
      /* Resizer color */
      border-color: white !important;
    }
</style>