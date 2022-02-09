<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import MainPreviewCarousel from "./MainPreviewCarousel.svelte";
                    
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
    <MainPreviewCarousel/>
</Template>


<Story
    name="Example 1"
    args={{ }}
/>
