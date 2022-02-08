<script lang="ts">
    export let tag: string;
    export let alt: string;


    let style:string;

    if (alt === "grey"){
        style = "tag-area alternative";
    }
    else if (alt === "fading")
    {
        style = "tag-area fading";
    }
    else {
        style = "tag-area";
    }

</script>

<div class={style}>{tag}</div>

<style>

    .alternative {
        background: #DADCE0 !important;
    }

    .fading {
        background: rgba(251, 226, 107, 0.6) !important;
    }

    .tag-area {
        display: inline-block;
        font-size: 12px;
        font-family: 'Montserrat';
        background: #FBE26B;
        font-weight: 400;
        line-height: 18px;
        text-align: center;
        padding: 4px 12px;
        border-radius: 18px;
    }
</style>