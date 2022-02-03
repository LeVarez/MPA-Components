<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import MadLib from "./MadLib.svelte";
</script>

  <Meta
    title="Mad Lib"
    component={MadLib}
    argTypes={{
      backgroundColor: { control: "color" },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    }}
  />

  <Template let:args>
    <MadLib/>
  </Template>

  <Story
    name="Chapter page Mad Lib"
    args={{}}
  />

