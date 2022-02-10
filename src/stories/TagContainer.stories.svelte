<script lang="ts">
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import TagContainer from "./TagContainer.svelte";
    import type { tagParameters } from "../interfaces";

    let tagArray1: tagParameters[] = 
        [{tag: "Blue economy", alt: ""}, 
        {tag: "MPAs", alt: ""}, 
        {tag: "Blue growth", alt: ""}, 
        {tag: "Ocean conservation", alt: ""}, 
        {tag: "Sustainable development", alt: ""}, 
        {tag: "Nature-based solutions", alt: ""}, 
        {tag: "All biomes", alt: ""}
    ];

</script>

<Meta
    title="Tag Container"
    component={TagContainer}
    argTypes={{
        backgroundColor: { control: "color" },
        size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
        },
    }}
/>

<Template let:args>
    <TagContainer tags={args.tags} width={args.width}/>
</Template>

<Story
    name="Tag group for Main Preview Card"
    args={{tags: tagArray1, width: 600}}
/>

