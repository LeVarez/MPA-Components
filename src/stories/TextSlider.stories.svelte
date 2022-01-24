<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import TextSlider from "./TextSlider.svelte";
    import content from './data/TextSlider.json';
</script>

  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
  <Meta
    title="Text Slider"
    component={TextSlider}
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
    <TextSlider
        content={args.content}
        color={args.color}
        buttonColor={args.buttonColor}
        textColor={args.textColor}
    />
  </Template>

  <!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
  <Story
    name="Yellow"
    args={{
      content: content,
      color: "#fbe26b",
      buttonColor: "#fbe26b",
      textColor: "#202020",
    }}
  />
  <Story
    name="Blue"
    args={{
      content: content,
      color: "#096fae",
      buttonColor: "#66cfd6",
      textColor: "#f9f9f9",
    }}
  />
