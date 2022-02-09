<script lang="ts">
    
    import Carousel from 'svelte-carousel';
    import MainPreviewCard from "./MainPreviewCard.svelte";
    let tagArray = [{tag: "Blue economy", alt: ""}, 
                    {tag: "MPAs", alt: ""}, 
                    {tag: "Blue growth", alt: ""}, 
                    {tag: "Ocean conservation", alt: ""}, 
                    {tag: "Sustainable development", alt: ""}, 
                    {tag: "Nature-based solutions", alt: ""}, 
                    {tag: "All biomes", alt: ""}];

</script>

<div class="carousel-container">

    <Carousel
        particlesToShow={3}
        particlesToScroll={1}
        dots={false}
    >

        <div class="card">
            <MainPreviewCard
                cardType= 'chapter'
                previewImage= "/img/chapter-preview-image.png"
                category= 'Sustainable financing'
                title= 'What should MPA managers know about the blue economy and business planning?'
                tags={tagArray} 
            />
        </div>


        <div class="card">
            <MainPreviewCard
                cardType= 'chapter'
                previewImage= "/img/chapter-preview-image.png"
                category= 'Sustainable financing'
                title= 'What should MPA managers know about the blue economy and business planning?'
                tags={tagArray} 
            />
        </div>

        <div class="card">
            <MainPreviewCard
                cardType= 'chapter'
                previewImage= "/img/chapter-preview-image.png"
                category= 'Sustainable financing'
                title= 'What should MPA managers know about the blue economy and business planning?'
                tags={tagArray} 
            />
        </div>

    </Carousel>
</div>

<style>

    .carousel-container {
        max-width: 2000px;
    }

    .card {
        margin-left: 100px;
    }

</style>