<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import TextSection from "./TextSection.svelte";
    import textSection from './data/TextSection.json';
</script>

  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
  <Meta
    title="Text Section"
    component={TextSection}
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
    <TextSection
        title={args.title}
        content={args.content}
        buttonText={args.buttonText}
    />
  </Template>

  <!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
  <Story
    name="Example 1"
    args={{
      title: textSection.title,
      content: textSection.content,
      buttonText: textSection.buttonText,
    }}
  />

