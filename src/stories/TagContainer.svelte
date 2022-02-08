<script lang="ts">
    import Tag from "./Tag.svelte";
    
    export let tags: {tag: string, alt: string}[];
    export let width:number;
</script>

<div class="tag-container" style="max-width:{width}px">
    {#each tags as t}
           <Tag tag={t.tag} alt={t.alt}/>
    {/each}
</div>

<style>

    .tag-container {
        display: inline-block;
    }

</style>