<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import StickyMenu from "./StickyMenu.svelte";
    import TextSection from "./TextSection.svelte";
    import textSection from './data/TextSection.json';
    import TinyCarousel from "./TinyCarousel.svelte";
    import slides from './data/tinySlides.json'
    import TextSlider2 from "./TextSlider2.svelte";
    import slides2 from './data/TextSlider.json';

    /*let slides = [
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
            title: '7-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '8-How can I improve communications to support sustainable financing?',
            tags: tagArray},
        ];*/


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
   <!-- <div class="menu">
        <StickyMenu
            menuOptions = {args.menuOptions}
        />
    </div>
    <div class="content">
        <TextSection
            title={"What is the blue economy"}
            content={textSection.content}
            buttonText={textSection.buttonText}
            id={"a"}
        />
        <TextSection
            title={"Where do MPAs fit in the blue economy?"}
            content={textSection.content}
            buttonText={textSection.buttonText}
            id={"b"}
        />
        <TextSection
            title={"What should MPA managers know about the blue economy and sustainable financing?"}
            content={textSection.content}
            buttonText={textSection.buttonText}
            id={"c"}
        />
        <TinyCarousel
            slides = {slides.slides}
        />
        <TextSection
            title={"The business Model Canvas"}
            content={textSection.content}
            buttonText={textSection.buttonText}
            id={"d"}
        />
        <TextSlider2
            slides = {slides2}
            backgroundColor = {"#096fae"}
            buttonColor = {"#66cfd6"}
            textColor = {"#f9f9f9"}
        />

        <TextSection
            title={"The Sustainable Business Model Canvas"}
            content={textSection.content}
            buttonText={textSection.buttonText}
            id={"e"}
        />
        <TextSection
            title={"Bringing your MPA enterprise and sustainable financing mechanism to life"}
            content={textSection.content}
            buttonText={textSection.buttonText}
            id={"g"}
        />
        <TextSection
            title={"Conclusions"}
            content={textSection.content}
            buttonText={textSection.buttonText}
            id={"h"}
        />
        <TextSection
            title={"References"}
            content={textSection.content}
            buttonText={textSection.buttonText}
            id={"i"}
        />

    </div>-->
    <div class="container">
        <div class="menu">
            <StickyMenu
                menuOptions = {args.menuOptions}
            />
        </div>
        <div class="content">
            <TextSection
                title={"What is the blue economy"}
                content={textSection.content}
                buttonText={textSection.buttonText}
                id={"a"}
                width={1000}
            />
            <TextSection
                title={"Where do MPAs fit in the blue economy?"}
                content={textSection.content}
                buttonText={textSection.buttonText}
                id={"b"}
                width={1000}
            />
            <TextSection
                title={"What should MPA managers know about the blue economy and sustainable financing?"}
                content={textSection.content}
                buttonText={textSection.buttonText}
                id={"c"}
                width={1000}
            />
            <div class="carousel">
                <TinyCarousel
                    slides = {slides.slides}
                />
            </div>
            <TextSection
                title={"The business Model Canvas"}
                content={textSection.content}
                buttonText={textSection.buttonText}
                id={"d"}
                width={1000}
            />
            <TextSlider2
                slides = {slides2}
                backgroundColor = {"#096fae"}
                buttonColor = {"#66cfd6"}
                textColor = {"#f9f9f9"}
            />
            <TextSection
                title={"The Value Proposition Canvas"}
                content={textSection.content}
                buttonText={textSection.buttonText}
                id={"e"}
                width={1000}
            />
            <TextSection
                title={"The Sustainable Business Model Canvas"}
                content={textSection.content}
                buttonText={textSection.buttonText}
                id={"f"}
                width={1000}
            />
            <TextSection
                title={"Bringing your MPA enterprise and sustainable financing mechanism to life"}
                content={textSection.content}
                buttonText={textSection.buttonText}
                id={"g"}
                width={1000}
            />
            <TextSection
                title={"Conclusions"}
                content={textSection.content}
                buttonText={textSection.buttonText}
                id={"h"}
                width={1000}
            />
            <TextSection
                title={"References"}
                content={textSection.content}
                buttonText={textSection.buttonText}
                id={"i"}
                width={1000}
            />
        </div>
    </div>
</Template>


<Story
    name="Example 1"
    args=
    {{   menuOptions : [
            {
                title : 'What is the blue economy',
                id : 'a',
            },
            {
                title : 'Where do MPAs fit in the blue economy?',
                id : 'b',
            },
            {
                title : 'What should MPA managers know about the blue economy and sustainable financing?',
                id : 'c',
            },
            {
                title : 'The business Model Canvas',
                id : 'd',
            },
            {
                title : 'The Value Proposition Canvas',
                id : 'e',
            },
            {
                title : 'The Sustainable Business Model Canvas',
                id : 'f',
            },
            {
                title : 'Bringing your MPA enterprise and sustainable financing mechanism to life',
                id : 'g',
            },
            {
                title : 'Conclusions',
                id : 'h',
            },
            {
                title : 'References',
                id : 'i',
            }
        ]
    }}
/>

<style>
    .content{
        float: right;
        width: 80%;
        margin-left: 20px;
        height: 2300px; /* Should be removed. Only for demonstration */
    }
    .menu{
        float: left;
        width: 300px;
        height: auto;
    }
    .container{

        width: 100%;
        content: "";
        display: table;
        clear: both;
    }
    .carousel{
        float: right;
        margin-right: -50px;
        display: block;
        width: 100%;
    }
</style>