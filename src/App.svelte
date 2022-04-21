<script lang='ts'>
    import MainPreviewCarousel from '../src/stories/MainPreviewCarousel.svelte';
    import CaseStudyIntroduction from './stories/CaseStudyIntroduction.svelte';
    import CaseStudyCover from './stories/CaseStudyCover.svelte';
    import type { cardParameters, tagParameters } from "./stories/interfaces";
    import caseStudiesInfo from "./stories/case_studies.json";
    import PageTopSearch from "./stories/PageTopSearch.svelte";
    import MadLibLanding from './stories/MadLibLanding.svelte';
/*
    let tagArray1: tagParameters[] = 
        [{tag: "Blue economy", alt: ""}, 
        {tag: "MPAs", alt: ""}, 
        {tag: "Blue growth", alt: ""}, 
        {tag: "Ocean conservation", alt: ""}, 
        {tag: "Sustainable development", alt: ""}, 
        {tag: "Nature-based solutions", alt: ""}, 
        {tag: "All biomes", alt: ""}
    ];

    let tagArray2: tagParameters[] = 
        [{tag: "Blue economy", alt: ""}, 
        {tag: "MPAs", alt: ""}, 
        {tag: "Blue growth", alt: ""}
    ];

    let param1_0: cardParameters = {
        cardType: "chapter", 
        previewImage: "/img/chapter-preview-image.png",
        category: 'Sustainable financing',
        title: '0-What should MPA managers know about the blue economy and business planning?', 
        tags: tagArray1,
        active: false
    }
    let param1_1: cardParameters = {
        cardType: "chapter", 
        previewImage: "/img/chapter-preview-image.png",
        category: 'Sustainable financing',
        title: '1-What should MPA managers know about the blue economy and business planning?', 
        tags: tagArray1,
        active: false
    }
    let param1_2: cardParameters = {
        cardType: "chapter", 
        previewImage: "/img/chapter-preview-image.png",
        category: 'Sustainable financing',
        title: '2-What should MPA managers know about the blue economy and business planning?', 
        tags: tagArray1,
        active: false
    }
    let param1_3: cardParameters = {
        cardType: "chapter", 
        previewImage: "/img/chapter-preview-image.png",
        category: 'Sustainable financing',
        title: '3-What should MPA managers know about the blue economy and business planning?', 
        tags: tagArray1,
        active: false
    }
    let param1_4: cardParameters = {
        cardType: "chapter", 
        previewImage: "/img/chapter-preview-image.png",
        category: 'Sustainable financing',
        title: '4-What should MPA managers know about the blue economy and business planning?', 
        tags: tagArray1,
        active: false
    }

    let param1_5: cardParameters = {
        cardType: "chapter", 
        previewImage: "/img/chapter-preview-image.png",
        category: 'Sustainable financing',
        title: '5-What should MPA managers know about the blue economy and business planning?', 
        tags: tagArray1,
        active: false
    }

    let param2_0: cardParameters = {
        cardType: "case study", 
        previewImage: "/img/case-study-preview-image.png",
        category: 'Sustainable financing',
        title: '1-<b>Port Honduras Marine Reserve</b> – effective co-management and financial diversification', 
        tags: tagArray2,
        active: false
    }

    let param2_1: cardParameters = {
        cardType: "case study", 
        previewImage: "/img/case-study-preview-image.png",
        category: 'Sustainable financing',
        title: '2-<b>Port Honduras Marine Reserve</b> – effective co-management and financial diversification', 
        tags: tagArray2,
        active: false
    }

    let param2_2: cardParameters = {
        cardType: "case study", 
        previewImage: "/img/case-study-preview-image.png",
        category: 'Sustainable financing',
        title: '3-<b>Port Honduras Marine Reserve</b> – effective co-management and financial diversification', 
        tags: tagArray2,
        active: false
    }

    let param2_3: cardParameters = {
        cardType: "case study", 
        previewImage: "/img/case-study-preview-image.png",
        category: 'Sustainable financing',
        title: '4-<b>Port Honduras Marine Reserve</b> – effective co-management and financial diversification', 
        tags: tagArray2,
        active: false
    }

    let param2_4: cardParameters = {
        cardType: "case study", 
        previewImage: "/img/case-study-preview-image.png",
        category: 'Sustainable financing',
        title: '5-<b>Port Honduras Marine Reserve</b> – effective co-management and financial diversification', 
        tags: tagArray2,
        active: false
    }

    let param2_5: cardParameters = {
        cardType: "case study", 
        previewImage: "/img/case-study-preview-image.png",
        category: 'Sustainable financing',
        title: '6-<b>Port Honduras Marine Reserve</b> – effective co-management and financial diversification', 
        tags: tagArray2,
        active: false
    }

    let chapterParams = [param1_0, param1_1, param1_2, param1_3, param1_4, param1_5];
    let caseStudyParams = [param2_0, param2_1, param2_2, param2_3, param2_4, param2_5];

    


        <PageTopSearch/>

        <MainPreviewCarousel
            parameters={caseStudyParams}
        />
    */

</script>

<div>
    <CaseStudyIntroduction
        parameters={caseStudiesInfo[0]}
    />
</div>
