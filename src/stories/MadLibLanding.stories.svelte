<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import MadLibLanding from "./MadLibLanding.svelte";
</script>

  <Meta
    title="Mad Lib Landing"
    component={MadLibLanding}
    argTypes={{
      backgroundColor: { control: "color" },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    }}
  />

  <Template let:args>
    <MadLibLanding/>
  </Template>

  <Story
    name="Landing page Mad Lib"
    args={{}}
  />

