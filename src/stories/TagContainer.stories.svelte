<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import TagContainer from "./TagContainer.svelte";

    let tagArray = [{tag: "Blue economy"}, 
                    {tag: "MPAs"}, 
                    {tag: "Blue growth"}, 
                    {tag: "Ocean conservation"}, 
                    {tag: "Sustainable development"}, 
                    {tag: "Nature-based solutions"}, 
                    {tag: "All biomes"}];

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
    args={{tags: tagArray, width: 600}}
/>

