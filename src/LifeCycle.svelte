<script lang='ts'>
    import LifeCycle from './stories/LifeCycle.svelte';
    import data from './stories/data/lifeCycle.json';
</script>

<div class="container">
    <LifeCycle
        title={"What's the <b> MPA management life cycle</b>"}
        data={data}
        componentsColor={{
            backgroundColor: "#fbe26b",
            buttonColor: "#fbe26b",
            textColor: "#202020",
            unselectedColor: "#FFFFFF80"
        }}
    />
</div>
<style>
.container{
    width: auto;
    height: 600px;
}
</style>