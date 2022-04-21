<script lang="ts">

    let milestone_1 = 'Toledo Institute for Development and Environment (TIDE) registered';
    let milestone_2 = 'Toledo Institute for Development and Environment (TIDE) registered';


</script>

<div class="container">
    <div class="year">
        1997
    </div>
    <svg height="15" width="15">
        <circle cx="7.5" cy="7.5" r="5" stroke="#FBE26B" stroke-width="3" fill="#096EAE" />
    </svg>
    <div class="dashed-line"></div>

    <div class="first-milestone">
        <div class="deviation">
            <div class="mini-dashed-line"></div>
            <svg height="15" width="15">
                <circle cx="7.5" cy="7.5" r="5" stroke="#FBE26B" stroke-width="3" fill="#096EAE" />
            </svg>
        </div>
        <div class="text">{milestone_1}</div>
    </div>

</div>

<style>

    .deviation{
        display: inline-block;
    }

    .first-milestone{
        margin-top: 70px;
    }

    .mini-dashed-line {
        position: absolute;
        width: 15px;
        border-top: 1.5px dashed #FBE26B;
        transform: translateX(8px);
    }

    .container {
        transform: translateY(-39px);
    }

    .year {
        font-family: 'Montserrat';
        size: 12px;
        color: #F9F9F9;
        padding-bottom: 10px;
        padding-left: 4px;
    }

    .text {
        font-family: 'Montserrat';
        size: 16px;
        color: #F9F9F9;
        max-width: 185px;
        padding-left: 35px;
        padding-top: 2px;

    }

    .dashed-line {
        position: absolute;
        transform: translateY(-7px);
        height: 183px;
        border-right: 1.5px dashed #FBE26B;
        padding-left: 6px;
    }
</style>