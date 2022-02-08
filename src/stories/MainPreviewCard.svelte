<script lang="ts">
    import TagContainer from "./TagContainer.svelte";
    export let tags: {tag: string, alt: string}[];
    export let cardType: 'chapter' | 'case study';
    export let category: string;
    export let title: string;
    export let previewImage: string;

    //const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

    //title = truncate(title, 100, ' ...');

</script>

<div class={cardType === 'chapter' ? 'container chapter' : 'container case-study'}>
    <div class="preview-image">
        <img class="image" width="766" height="344" src={previewImage} alt="preview">
    </div>
    <div class="preview-content">
        <div class="circle-button"/>
        <div class="preview-category-text">{category}</div>
        <div class="preview-title">{@html title}</div>
        <div class="tags-title">What's this about?</div>
        <TagContainer {tags} width={600}/>
    </div>
</div>



<style>

    .circle-button {
        float: right;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: #FBE26B;
        box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.15);
    }

    .tags-title {
        margin-top: 2rem;
        margin-bottom: 0.75rem;
        font-weight: 700;
        font-size: 16px;
    }

    .preview-title {
        display: flex;
        font-weight: 275;
        font-size: 32px;
        max-width: 570px;
        margin-top: 0px;
        max-height: 120px;
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
    }

    .preview-category-text {
        display: flex;
        font-weight: 700;
        font-size: 20px;
        max-width: 720px;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }

    .preview-content {
        font-family: 'Montserrat';
        color: #FFFFFF;
        padding-left: 1.5rem;
    }

    .image {
        border-radius: 40px 40px 0px 0px;
    }

    .container {
        width: 766px;
        height: 671px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
        border-radius: 40px;
        border: none;
    }

    .chapter {
        background: #096EAE;
    }

    .case-study {
        background: #311E5D;
    }

    .preview-image {
        max-width: 1000px;
        max-height: 500px;
        width: auto;
        height: auto;
        
    }
    
</style>