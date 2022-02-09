<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import TinyPreviewCard from "./TinyPreviewCard.svelte";

    let tagArray = [{tag: "Blue economy"}, 
                    {tag: "MPAs"}, 
                    {tag: "Blue growth"}, 
                    {tag: "Ocean conservation"}];
                    
</script>

<Meta
    title="Tiny Preview Card"
    component={TinyPreviewCard}
    argTypes={{
        backgroundColor: { control: "color" },
        size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
        },
    }}
/>

<Template let:args>
    <TinyPreviewCard
        previewImage = {args.previewImage}
        title = {args.title}
        tags = {args.tags}
    />
</Template>


<Story
    name="Example 1"
    args={{
            previewImage: "/img/case-study-preview-image.png",
            title: 'How can I improve communications to support sustainable financing?',
            tags: tagArray }}
/>
