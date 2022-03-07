<script lang="ts">
    import TagsMenu from './stories/TagsMenu.svelte';
    import tagsMenuData from './stories/data/tagsMenuData.json';
    import type {TagsMenu as TagsMenuInterface} from './interfaces';

    let data : TagsMenuInterface = {...{circularMenuConfig : tagsMenuData.circleMenu.menuSettings}, ...tagsMenuData.tags};

</script>
<TagsMenu
      data = {data}
/>
<style>

</style>