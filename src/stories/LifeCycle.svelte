<script  lang="ts">
  import CircleMenu from './CircleMenu.svelte';
  import TextSlider from './TextSlider2.svelte';

  export let title = "No title defined";
  export let content;
  export let componentsColor;
  export let backgroundImage = '/img/fishermans.png';
  export let backgroundColor = '#79d8df';

  let currentPageIndex = 0;

</script>

<div class="container" style="background-image: url('{backgroundImage}'); background-color: {backgroundColor}80">
  <div class="left-side-block">
    <div class="title">{@html title}</div>
    <TextSlider
      bind:currentPageIndex={currentPageIndex}
      slides={content.data}
      backgroundColor={componentsColor.backgroundColor}
      buttonColor={componentsColor.buttonColor}
      textColor={componentsColor.textColor}
      width={500}
      height={250}
    />
  </div>
  <div class="right-side-block">
    <CircleMenu
          data={content.data}
          config={content.menuSettings}
          bind:currentPageIndex={currentPageIndex}
    />
  </div>

</div>

<style>
  .container{
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .left-side-block{
    margin-left: 30px;
    margin-top: 50px;
    float: left;
    width: 50%;
  }

  .right-side-block{
    margin-top: 70px;
    float: right;
  }

  .left-side-block .title{
    font-size: 50px;
    margin-bottom: 50px;
  }

</style>