<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import TinyCarousel from "./TinyCarousel.svelte";
    let tagArray = [{tag: "Blue economy", alt: "grey"},
                    {tag: "MPAs", alt: "grey"},
                    {tag: "Blue growth", alt: "grey"},
                    {tag: "Ocean conservation", alt: "grey"}];

</script>

<Meta
    title="Tiny Carousel"
    component={TinyCarousel}
    argTypes={{
        backgroundColor: { control: "color" },
        size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
        },
    }}
/>

<Template let:args>
    <TinyCarousel
        slides = {args.slides}
    />
</Template>


<Story
    name="Example 1"
    args=
    {{   slides : [
            {previewImage: "/img/fishermans.png",
            title: '1-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '2-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '3-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '4-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '5-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '6-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '71-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '8-How can I improve communications to support sustainable financing?',
            tags: tagArray},
        ]
    }}
/>