<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import TextSlider2 from "./TextSlider2.svelte";
    import slides from './data/TextSlider.json';
</script>

  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
  <Meta
    title="Splide"
    component={TextSlider2}
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
    <div style="width: fit-content;">
      <TextSlider2
        {slides}
      />
    </div>
  </Template>


  <!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
  <Story
    name="Example 1"
    args={{
        slides: slides
    }}
  />

