<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import CaseStudyIntroduction from "./CaseStudyIntroduction.svelte";
    import CaseStudies from "./case_studies.json";

    console.log(CaseStudies[0]);
                    
</script>

<Meta
    title="CaseStudyIntroduction"
    component={CaseStudyIntroduction}
    argTypes={{}}
/>

<Template let:args>
    <CaseStudyIntroduction

    />
</Template>


<Story
    name="Case Study Example"
    args={{ width: 500, highlight: {lat: 40.7128, lon: -74.0059} }}
/>
