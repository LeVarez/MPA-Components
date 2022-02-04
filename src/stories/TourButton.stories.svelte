<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import TourButton from "./TourButton.svelte";
</script>

  <Meta
    title="Start your tour Button"
    component={TourButton}
    argTypes={{
      backgroundColor: { control: "color" },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    }}
  />

  <Template let:args>
    <TourButton/>
  </Template>

  <Story
    name="Tour Button Version 1"
    args={{}}
  />

