<script lang="ts">
    import TinyCarousel from './stories/TinyCarousel.svelte';
    import slides from './stories/data/TextSlider.json';

    let tagArray = [{tag: "Blue economy", alt: "grey"},
                    {tag: "MPAs", alt: "grey"},
                    {tag: "Blue growth", alt: "grey"},
                    {tag: "Ocean conservation", alt: "grey"}];
    let slides = [
            {previewImage: "/img/fishermans.png",
            title: '1-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '2-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '3-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '4-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '5-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '6-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '7-How can I improve communications to support sustainable financing?',
            tags: tagArray},
            {previewImage: "/img/fishermans.png",
            title: '8-How can I improve communications to support sustainable financing?',
            tags: tagArray},
        ]
</script>

<div style="width: fit-content; float:right;">
    <TinyCarousel
      {slides}
    />
</div>