<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import LifeCycle from "./LifeCycle.svelte";
    import content from './data/LifeCycle.json';
</script>

  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
  <Meta
    title="Life Cycle"
    component={LifeCycle}
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
    <div style="width: 100%; height: 500px">
    <LifeCycle
      title={args.title}
      content={args.content}
      componentsColor={args.componentsColor}
    />
    </div>
  </Template>

  <!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
  <Story
    name="Yellow"
    args={{
        title: "What's the <b> MPA management life cycle</b>",
        content: content,
        componentsColor:{
                backgroundColor: "#fbe26b",
                buttonColor: "#fbe26b",
                textColor: "#202020",
                unselectedColor: "#FFFFFF80"
        },
    }}
  />

