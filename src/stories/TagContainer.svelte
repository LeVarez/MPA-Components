<script lang="ts">
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import type {TagParameters} from '../interfaces';
    import Tag from "./Tag.svelte";

    export let tags: TagParameters[];
    export let width:number;
    export let carousel : boolean = false;
    export let selectedIndex : number = -1;

    let onClickFn = (index : number) => {
        selectedIndex = tags[index].index;
    }

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

        {#each tags as t, i}
        <SplideSlide>
            <Tag tag={t.tag} alt={t.index === selectedIndex || selectedIndex === -1? t.alt : 'fading'}/>
        </SplideSlide>
        {/each}
    </Splide>
    {:else}
    {#each tags as t, i}
           <Tag tag={t.tag} alt={t.index === selectedIndex || selectedIndex === -1? t.alt : 'fading'} onClickFn={() => onClickFn(i)}/>
    {/each}
    {/if}
</div>

<style>
    .tag-container {
        display: inline-block;
    }
</style>