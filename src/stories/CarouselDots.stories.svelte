<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
import Progress from "svelte-carousel/src/components/Progress/Progress.svelte";
    import CarouselDots from "./CarouselDots.svelte";

</script>

  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
  <Meta
    title="CarouselDots"
    component={CarouselDots}
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
        <CarouselDots
            currentPageIndex={args.currentPageIndex}
            pagesCount={args.pagesCount}
            progress={args.progress}
        />
  </Template>

  <!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
  <Story
    name="Example 1"
    args={{
        currentPageIndex: 0,
        pagesCount: 7,
        progress: true,
    }}
  />

