<script lang="ts">
    import Tag from "./Tag.svelte";

    interface tagParameters {tag: string, alt: string};
    interface cardParameters {
        tags: tagParameters[],
        cardType: 'chapter' | 'case study',
        category: string,
        title: string,
        previewImage: string
    }

    export let tags: tagParameters[];
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