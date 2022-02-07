<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import TextSlider3 from "./TextSlider3.svelte";
    import content from './data/TextSlider.json';
</script>

  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
  <Meta
    title="Text Slider3"
    component={TextSlider3}
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
    <div style="width: 800px; height: 400px;">
      <TextSlider3
        content={args.content}
        backgroundColor={args.backgroundColor}
        buttonColor={args.buttonColor}
        textColor={args.textColor}
        transitionTime={args.transitionTime}
      />
  </div>
  </Template>

  <!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
  <Story
    name="Yellow"
    args={{
      content: content,
      backgroundColor: "#fbe26b",
      buttonColor: "#fbe26b",
      textColor: "#202020",
      transitionTime: 10000,
    }}
  />
  <Story
    name="Blue"
    args={{
      content: content,
      backgroundColor: "#096fae",
      buttonColor: "#66cfd6",
      textColor: "#f9f9f9",
      transitionTime: 10000,
    }}
  />
