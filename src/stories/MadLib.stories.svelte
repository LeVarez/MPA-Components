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
    <svg width="300" height="300" style="border:1px gray solid">
        <MadLib
            variable = {args.variable}
        />
    </svg>
  </Template>


  <Story
    name="Example 1"
    args={{
        variable: 10
    }}
  />

