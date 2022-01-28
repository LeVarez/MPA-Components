<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import CircularSegment from "./CircularSegment.svelte";

</script>

  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
  <Meta
    title="Circle Segment"
    component={CircularSegment}
    argTypes={{
      backgroundColor: { control: "color" },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    }}
  />

  <!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
  <Template let:args>
    <svg width="300" height="300" style="border:1px gray solid">
        <CircularSegment
            startAngle = {args.startAngle}
            endAngle = {args.endAngle}
            radius = {args.radius}
            thickness = {args.thickness}
            x = {args.x}
            y = {args.y}
            color = {args.color}
            borderColor = {args.borderColor}
        />
    </svg>
  </Template>

  <!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
  <Story
    name="Example 1"
    args={{
        startAngle : 0,
        endAngle : 60,
        radius : 50,
        thickness : 30,
        x : 150,
        y : 150,
        color : '#fbe26b',
        borderColor : 'black',
    }}
  />

