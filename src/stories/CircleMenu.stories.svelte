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
        config={args.config}
    />
  </Template>

  <!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
  <Story
    name="Example 1"
    args={{
      data: data.data,
      config: data.menuSettings
    }}
  />



