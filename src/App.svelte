<script>
    import BurgerMenu from 'svelte-burger-menu';
    import { Router, Link, Route } from "svelte-routing";
    import TextSlider from './TextSlider.svelte';
    import TinyCarousel from './TinyCarousel.svelte';
    import StickyMenu from './StickyMenu.svelte';
    import TagsMenu from './TagsMenu.svelte';
    import LifeCycle from './LifeCycle.svelte';
    import BusinessModelCanvas from './BusinessModelCanvas.svelte';
</script>

<Router>

    <BurgerMenu padding={'25px'}>
        <Link to="/textSlider">Text Slider</Link>
        <Link to="/tinyCarousel">Tiny Carousel</Link>
        <Link to="/stickyMenu">Sticky Menu</Link>
        <Link to="/tagsMenu">Tags Menu</Link>
        <Link to="/lifeCycle">Life Cycle</Link>
        <Link to="/businessmodelcanvas">Business Model Canvas</Link>
    </BurgerMenu>

    <div class="content">
        <Route path="/textSlider">
            <TextSlider/>
        </Route>
        <Route path="/tinyCarousel">
            <TinyCarousel/>
        </Route>
        <Route path="/stickyMenu">
            <StickyMenu/>
        </Route>
        <Route path="/tagsMenu">
            <TagsMenu/>
        </Route>
        <Route path="/lifeCycle">
            <LifeCycle/>
        </Route>
        <Route path="/businessmodelcanvas">
            <BusinessModelCanvas/>
        </Route>
    </div>
</Router>


<style type="text/postcss">
    :global(.svelte-1pft1nn){
        z-index: 10 !important;
    }
    :global(.svelte-1jfmuiu){
        z-index: 9 !important;
    }

    .content{
        z-index: 1 !important;
        margin-left: 50px;
    }
</style>