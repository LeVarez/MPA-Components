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
    />
</Template>

<Story
    name="Chapter card"
    args={{cardType: 'chapter'}}
/>

<Story
    name="Case study"
    args={{cardType: 'case study'}}
/>
