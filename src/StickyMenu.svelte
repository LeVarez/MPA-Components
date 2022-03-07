<script lang='ts'>
    import TextSection from './stories/TextSection.svelte';
    import StickyMenu from  './stories/StickyMenu.svelte';
    import textSection from './stories/data/TextSection.json';
    import type {StickyMenuOption} from './interfaces';

    let width : number = 215;

    let  menuOptions : StickyMenuOption[] = [
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
</script>


    <div class="menu" style="width: {width}px;">
        <StickyMenu
            menuOptions = {menuOptions}
        />
    </div>
    <div class="content">
       {#each menuOptions as option}
            <TextSection
                title = {option.title}
                buttonText = {textSection.buttonText}
                content = {textSection.content}
                id = {option.id}
                width = {1000}
            />
       {/each}
    </div>


<style>
    .content{
        padding-left: 30%;
        padding-right: 30%;
    }
    .menu{
        margin-left: 10%;
        height: max-content;
        position: fixed;
    }
</style>