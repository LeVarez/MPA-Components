<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import StickyMenu from "./StickyMenu.svelte";
</script>

<Meta
    title="Stikcy Menu"
    component={StickyMenu}
    argTypes={{
        backgroundColor: { control: "color" },
        size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
        },
    }}
/>

<Template let:args>
    <StickyMenu
        menuOptions = {args.menuOptions}
    />
</Template>


<Story
    name="Example 1"
    args=
    {{   menuOptions : [
            {
                title : 'What is the blue economy',
                id : '1',
            },
            {
                title : 'Where do MPAs fit in the blue economy?',
                id : '2',
            },
            {
                title : 'what should MPA managers know about the blue economy and sustainable financing?',
                id : '3',
            },
            {
                title : 'The business Model Canvas',
                id : '4',
            },
            {
                title : 'The Value Proposition Canvas',
                id : '5',
            },
            {
                title : 'The Sustainable Business Model Canvas',
                id : '6',
            },
            {
                title : 'Bringing your MPA enterprise and sustainable financing mechanism to life',
                id : '7',
            },
            {
                title : 'Conclusions',
                id : '8',
            },
            {
                title : 'References',
                id : '9',
            }
        ]
    }}
/>