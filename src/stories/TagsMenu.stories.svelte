<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import TagsMenu from "./TagsMenu.svelte";

    import tagsMenuData from './data/tagsMenuData.json';
    import TagContainer from './TagContainer.svelte';
import App from "../App.svelte";
import Arrow from "svelte-carousel/src/components/Arrow/Arrow.svelte";
import Button from "./Button.svelte";
import Carousel from "svelte-carousel/src/components/Carousel/Carousel.svelte";
import CarouselDots from "./CarouselDots.svelte";
import CircleMenu from "./CircleMenu.svelte";
import CircularSegment from "./CircularSegment.svelte";
import Dot from "./Dot.svelte";
</script>

  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
  <Meta
    title="Tags Menu"
    component={TagsMenu}
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
    <TagsMenu
      data = {{...{circularMenuConfig : args.circularMenuConfig}, ...args.data}}

    />
  </Template>

  <!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
  <Story
    name="Example 1"
    args={{
      circularMenuConfig : tagsMenuData.circleMenu.menuSettings,
      data : tagsMenuData.tags
    }}
  />

