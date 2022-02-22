<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import GlobeViz from "./GlobeViz.svelte";
                    
</script>

<Meta
    title="GlobeViz"
    component={GlobeViz}
    argTypes={{
        backgroundColor: { control: "color" },
        color: { control: "color"},
        size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
        },
    }}
/>

<Template let:args>
    <GlobeViz
        scale={args.scale}
        coordinates={args.coordinates}
    />
</Template>


<Story
    name="GlobeViz 111"
    args={{ scale: 100, coordinates: {lat: 54.2, lon: -22.3} }}
/>
