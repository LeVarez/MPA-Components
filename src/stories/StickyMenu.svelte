<script lang='ts'>
    import { onMount } from 'svelte';
    import MenuSpy from './menuspy/menuspy';

    import type { MenuSpyParams} from './menuspy/menuspy';
    import * as animateScroll from "svelte-scrollto";

    export let menuOptions = []

    let elm : Element;
    let ms : MenuSpy;
    var msParams : MenuSpyParams = {
        menuItemSelector : 'div[href^="#"]',
        activeClass: 'active',
        threshold: 600,
        enableLocationHash: false,
        hashTimeout: 0,
        callback: null
    };

    let width : number;
    let smallScreen : boolean;

    onMount(() => {
        elm = document.querySelector('#main-menu');
        ms = new MenuSpy(elm, msParams);
        getScreen();
    })

    function getScreen () {
        smallScreen = width < 1200;
    }

</script>

<svelte:window bind:innerWidth={width} on:resize={getScreen}/>
<nav class="mainnav" id="main-menu">
    {#each menuOptions as option, i}
    <div
        class='menuoption {i === 0 ? "active" : ""}'
        on:click=
        {
        animateScroll.scrollTo({
            element: `#${option.id}`,
            offset: smallScreen ? -24 : 24,
            onStart: () => {
            ms.activateItem(ms.scrollItems[i]);
            ms.dissableUpdate();
            },
            onDone: () => { ms.enableUpdate(); ms.tick(); }
        })
        }
    >
        {option.title}
    </div>
    {/each}

</nav>

<style>
    .mainnav{
        position: absolute;
        width: 215px;

        left: 66px;

        background: #F9F9F9;
        box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.1);
        border-radius: 0px 0px 20px 20px;
        padding-top: 31px;
        padding-bottom: 29px;
    }
    .menuoption{
        margin: 10px 40px 0px 28px;
        font-family: 'Montserrat';
        font-size: 12px;
        font-weight: 300;
        line-height: 18px;
    }
</style>