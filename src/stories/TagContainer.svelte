<script lang="ts">
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
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
    export let carousel : boolean = false;
</script>

<div class="tag-container" style="max-width:{width}px">
    {#if carousel}
    <Splide
    options={ {
        rewind: true,
        padding: { right: '13%' },
        arrows: false,
        pagination: false,
        autoWidth: true,
      } }>

        {#each tags as t}
        <SplideSlide>
            <Tag tag={t.tag} alt={t.alt}/>
        </SplideSlide>
        {/each}
    </Splide>
    {:else}
    {#each tags as t}
           <Tag tag={t.tag} alt={t.alt}/>
    {/each}
    {/if}
</div>

<style>
    .tag-container {
        display: inline-block;
    }
</style>