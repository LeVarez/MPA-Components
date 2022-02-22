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
        yaw={args.yaw}
        pitch={args.pitch}
        roll={args.roll}
    />
</Template>


<Story
    name="GlobeViz 111"
    args={{ width: 500, highlight: {lat: -74.0059, lon: 40.7128}, yaw: 0, pitch: 0, roll: 0 }}
/>
