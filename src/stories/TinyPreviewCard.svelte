<script lang="ts">
    import TagContainer from "./TagContainer.svelte";
    export let tags: {tag: string, alt: string}[];
    export let title: string;
    export let previewImage: string;
</script>

<div class="container" tabindex="0">
    <img src={previewImage} alt="interesting-chapters" width="292" height="156"/>
    <div class="preview-title">{@html title}</div>
    <TagContainer {tags} width={285}/>
</div>

<style>
    .container {
        display: inline-block;
    }
    .preview-title {
        margin-top: 0.25rem;
        font-family: 'Montserrat';
        font-size: 20px;
        font-weight: 300;
        line-height: 24.38px;
        max-width: 285px;
        margin-bottom: 0.5rem;
        padding-left: 0.15rem;
    }

</style>