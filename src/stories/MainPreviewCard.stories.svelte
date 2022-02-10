<script lang="ts">
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import MainPreviewCard from "./MainPreviewCard.svelte";
    import type { cardParameters, tagParameters } from "./interfaces";

    let tagArray1: tagParameters[] = 
        [{tag: "Blue economy", alt: ""}, 
        {tag: "MPAs", alt: ""}, 
        {tag: "Blue growth", alt: ""}, 
        {tag: "Ocean conservation", alt: ""}, 
        {tag: "Sustainable development", alt: ""}, 
        {tag: "Nature-based solutions", alt: ""}, 
        {tag: "All biomes", alt: ""}
    ];
    
    let param1: cardParameters = {
        cardType: "chapter", 
        previewImage: "/img/chapter-preview-image.png",
        category: 'Sustainable financing',
        title: 'What should MPA managers know about the blue economy and business planning?', 
        tags: tagArray1
    }
                    
</script>

<Meta
    title="Main Preview Card"
    component={MainPreviewCard}
    argTypes={{
        backgroundColor: { control: "color" },
        size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
        },
    }}
/>

<Template let:args>
    <MainPreviewCard
        cardType = {args.cardType}
        previewImage = {args.previewImage}
        category = {args.category}
        title = {args.title}
        tags = {args.tags}
        parameters = {param1}
    />
</Template>

<Story
    name="Chapter card"
    args={{cardType: 'chapter', 
            previewImage: "/img/chapter-preview-image.png",
            category: 'Sustainable financing',
            title: 'What should MPA managers know about the blue economy and business planning?', 
            tags: tagArray }}
/>

<Story
    name="Case study"
    args={{cardType: 'case study',
            previewImage: "/img/case-study-preview-image.png",
            category: 'Sustainable financing',
            title: '<b>Port Honduras Marine Reserve</b> – effective co-management and financial diversification',
            tags: tagArray }}
/>
