<script  lang="ts">
  import CircleMenu from './CircleMenu.svelte';
  import TextSlider from './TextSlider2.svelte';
  import type {CircleMenuConfig, MenuElement, TextSlide} from '../interfaces';
import { onMount } from 'svelte';

  export let title = "No title defined";
  export let data : LifeCycleData;
  export let componentsColor;
  export let backgroundImage = '/img/fishermans.png';
  export let backgroundColor = '#79d8df';

  let width : number = 0;
  let initialCircularMenuConfig : CircleMenuConfig = JSON.parse(JSON.stringify(data.circularMenu.config))

  let textSliderWidth : number;
  let textSliderHeight : number;

  onMount(() =>{
    textSliderWidth = 570;
    textSliderHeight = 270;
  })

  interface LifeCycleData {
    slides : TextSlide[];
    circularMenu : {
      data : MenuElement[],
      config : CircleMenuConfig
    }
  }

  let currentPageIndex : number = 0;

  let resizeObjectProperties = function(multiplier : number) {
    data.circularMenu.config.x = initialCircularMenuConfig.x * multiplier;
    data.circularMenu.config.y = initialCircularMenuConfig.y * multiplier;
    data.circularMenu.config.radius = initialCircularMenuConfig.radius * multiplier;
    data.circularMenu.config.width = initialCircularMenuConfig.width * multiplier;
    data.circularMenu.config.height = initialCircularMenuConfig.height * multiplier;
    data.circularMenu.config.thickness.gain = initialCircularMenuConfig.thickness.gain * multiplier;
    data.circularMenu.config.thickness.group = initialCircularMenuConfig.thickness.group * multiplier;
    data.circularMenu.config.thickness.unselected = initialCircularMenuConfig.thickness.unselected * multiplier;
  };

  let resizeElements = () => {
    if(width > 1300) {
      data.circularMenu.config = JSON.parse(JSON.stringify(initialCircularMenuConfig));
      textSliderWidth = 570;
      textSliderHeight = 270;
    }
    else if (width > 1000 && width <= 1300) {
      resizeObjectProperties(0.7);
      textSliderHeight = 270 * 0.7;
      textSliderWidth = 570 * 0.7;
    }
    else if (width > 600 && width <= 1000) {
      resizeObjectProperties(0.5);
      textSliderWidth = 570 * 0.5;
      textSliderHeight = 270 * 0.5;
    }
  }

  $: if(width) {
    resizeElements();
  }

  $: if(textSliderWidth){
    console.log(textSliderWidth);
  }

</script>
<svelte:window bind:innerWidth={width}/>
<div class="container" style="background-image: url('{backgroundImage}'); background-color: {backgroundColor}80">
  <div class="block">
    <div class="title">{@html title}</div>
    <div class="textSlider">
      <TextSlider
        bind:currentPageIndex={currentPageIndex}
        slides={data.slides}
        backgroundColor={componentsColor.backgroundColor}
        buttonColor={componentsColor.buttonColor}
        textColor={componentsColor.textColor}
        width={textSliderWidth}
        height={textSliderHeight}
      />
    </div>
  </div>
  <div class="block">
    <CircleMenu
          data={data.circularMenu.data}
          bind:config={data.circularMenu.config}
          bind:currentPageIndex={currentPageIndex}
    />
  </div>

</div>

<style>
  .container{
    display: grid;
    grid-template-columns: auto auto;
    height: inherit;
    width: inherit;
    background-size: cover;
    padding: 40px 40px 40px 40px;
    height: 600px;
  }

  .block{
    height: inherit;
    overflow: hidden;
  }

  .block .title{
    font-size: 50px;
    margin-bottom: 50px;
    width: 400px;
  }

  .textSlider{
    padding-bottom: 160px;
  }

  @media (max-width: 1300px) {
    .container {
      height: 400px;
    }
    .block .title{
      font-size: 35px;
      margin-bottom: 40px;
      width: 400px;
    }
  }
  @media (max-width: 600px) {
    .container {
      height: 200px;
    }
  }
</style>