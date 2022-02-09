<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import SwipeButton from "./SwipeButton.svelte";
                    
</script>

<Meta
    title="Swipe Button"
    component={SwipeButton}
    argTypes={{
        backgroundColor: { control: "color" },
        size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
        },
    }}
/>

<Template let:args>
    <SwipeButton/>
</Template>


<Story
    name="Example 1"
    args={{ }}
/>
