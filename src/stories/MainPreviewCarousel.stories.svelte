<script lang="ts">
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import MainPreviewCarousel from "./MainPreviewCarousel.svelte";
    import MainPreviewCard from "./MainPreviewCard.stories.svelte";

    let tagArray = [{tag: "Blue economy"}, 
                    {tag: "MPAs"}, 
                    {tag: "Blue growth"}, 
                    {tag: "Ocean conservation"}, 
                    {tag: "Sustainable development"}, 
                    {tag: "Nature-based solutions"}, 
                    {tag: "All biomes"}];

    let pc1 = {cardType: 'chapter', 
        previewImage: "/img/chapter-preview-image.png",
        category: 'Sustainable financing',
        title: 'What should MPA managers know about the blue economy and business planning?', 
        tags: tagArray 
    }


</script>

<Meta
    title="Carousel (Landing page)"
    component={MainPreviewCarousel}
    argTypes={{
        backgroundColor: { control: "color" },
        size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
        },
    }}
/>

<Template let:args>
    <MainPreviewCarousel
        previewCards={args.previewCards}
    />
</Template>


<Story
    name="Example 1"
    args={{previewCards: [pc1, pc1, pc1] }}
/>
