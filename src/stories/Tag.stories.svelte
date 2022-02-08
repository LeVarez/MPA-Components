<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Tag from "./Tag.svelte";
</script>

<Meta
    title="Tag"
    component={Tag}
    argTypes={{
        backgroundColor: { control: "color" },
        size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
        },
    }}
/>

<Template let:args>
    <Tag
        tag={args.tag}
        alt={args.alt}
    />
</Template>

<Story
    name="Normal yellow tag"
    args={{tag: "Blue economy"}}
/>

<Story
    name="Normal grey tag"
    args={{tag: "MPAs", alt: "grey"}}
/>

<Story
    name="Fading yellow tag"
    args={{tag: "Blue growth", alt: "fading"}}
/>
