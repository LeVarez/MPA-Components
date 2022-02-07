<script lang="ts">

    export let cardType: 'chapter' | 'case study';

</script>

<div class="container">
    <div class="preview-image">
        <img class="image" width="766" height="344"src="/img/chapter-preview-image.png" alt="preview">
    </div>
    <div class="preview-content">
        <div class="preview-category-text">
            <p>Sustainable financing</p>
        </div>
        <div class="preview-title">

        </div>
        <div class="button">

        </div>
        <div class="tags-title">

        </div>

    </div>
</div>

<style>

    .preview-category-text {
        font-weight: 700;
        font-size: 20px;

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
        background: #096EAE;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
        border-radius: 40px;
        border: none;
    }

    .preview-image {
        max-width: 1000px;
        max-height: 500px;
        width: auto;
        height: auto;
        
    }
    
</style>