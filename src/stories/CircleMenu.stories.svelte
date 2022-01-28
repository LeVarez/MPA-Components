<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import CircleMenu from "./CircleMenu.svelte";
    import data from "./data/CircleMenu.json";
</script>

  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
  <Meta
    title="Circle Menu"
    component={CircleMenu}
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
    <CircleMenu
        data={args.data}
        radius={args.radius}
        thickness={args.thickness}
        x={args.x}
        y={args.y}
        gap={args.gap}
        color={args.color}
        borderColor={args.borderColor}
    />
  </Template>

  <!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
  <Story
    name="Example 1"
    args={{
      data: data,

      radius : 100,
      thickness : 20,
      x : 150,
      y : 150,
      gap : 3,
      color : "#fbe26b",
      borderColor : "#fbe26b",

    }}
  />

  <Story
    name="Example 2"
    args={{
      data: data,

      radius : 50,
      thickness : 5,
      x : 150,
      y : 150,
      gap : 3,
      color : "#fbe26b",
      borderColor : "#fbe26b",

    }}
  />

  <Story
    name="Example 3"
    args={{
      data: data,

      radius : 50,
      thickness : 80,
      x : 150,
      y : 150,
      gap : 0,
      color : "#fbe26b",
      borderColor : "#fbe26b",

    }}
  />

  <Story
    name="Example 3"
    args={{
      data: data,

      radius : 50,
      thickness : 80,
      x : 150,
      y : 150,
      gap : 0,
      color : "#ed76d9",
      borderColor : "#ed76d9",

    }}
  />

  <Story
    name="Example 5"
    args={{
      data: data,

      radius : 50,
      thickness : 80,
      x : 150,
      y : 150,
      gap : 0,
      color : "#0DD0B4",
      borderColor : "#033e36",

    }}
  />
  <Story
    name="Example 5"
    args={{
      data: data,

      radius : 0,
      thickness : 80,
      x : 150,
      y : 150,
      gap : 0,
      color : "#8a2be2",
      borderColor : "#6e22b4",

    }}
  />

