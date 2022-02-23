<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import GlobeViz from "./GlobeViz.svelte";
                    
</script>

<Meta
    title="GlobeViz"
    component={GlobeViz}
    argTypes={{}}
/>

<Template let:args>
    <GlobeViz
        width={args.width}
        highlight={args.highlight}
    />
</Template>


<Story
    name="GlobeViz 111"
    args={{ width: 500, highlight: {lat: 40.7128, lon: -74.0059} }}
/>
