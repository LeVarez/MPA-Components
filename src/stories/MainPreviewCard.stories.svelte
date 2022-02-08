<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import MainPreviewCard from "./MainPreviewCard.svelte";
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
    />
</Template>

<Story
    name="Chapter card"
    args={{cardType: 'chapter', 
            previewImage: "/img/chapter-preview-image.png",
            category: 'Sustainable financing',
            title: 'What should MPA managers know about the blue economy and business planning?' }}
/>

<Story
    name="Case study"
    args={{cardType: 'case study',
            previewImage: "/img/case-study-preview-image.png",
            category: 'Sustainable financing',
            title: '<b>Port Honduras Marine Reserve</b> – effective co-management and financial diversification' }}
/>
