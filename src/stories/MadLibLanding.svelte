<script lang="ts">
    import MadLibSelectorLanding from "./MadLibSelectorLanding.svelte";
    import TourButton from "./TourButton.svelte";
 
    const typeUserList = ['an MPA planner', 'an MPA manager', 'a community organizer', 'an LMMA practitioner'];
    const objectiveList = ['answers', 'examples', 'case studies', 'tools'];
    const objectiveVerbList = ['enable', 'evaluate'];
    const actionSubjectList = ['I need to make','my team will make','my government needs to make'];
    const tourButtonClicked = () => { alert("USER PERSONA: \n1: " + userPersona[0] + "\n2: " + userPersona[1] + "\n3: " + userPersona[2] + "\n4: " + userPersona[3]); }
    
    let typeUser:string, objective:string, objectiveVerb: string, actionSubject: string;
    let userPersona: string[];
    $: userPersona = [typeUser, objective, objectiveVerb, actionSubject];

    let width:number, height:number;
</script>

<div class="container" bind:clientWidth={width} bind:clientHeight={height}>
    <div class="mad-lib" {width} {height}>
        <p class="upper-text">Find information relevant to you.</p>
        <p class="normal-text">I am <MadLibSelectorLanding options={typeUserList} bind:selected={typeUser}/> and want<br>
            help finding <MadLibSelectorLanding options={objectiveList} bind:selected={objective}/> to <MadLibSelectorLanding options={objectiveVerbList} bind:selected={objectiveVerb}/>
            <br>decisions <MadLibSelectorLanding options={actionSubjectList} bind:selected={actionSubject}/></p>
        <div class="button-area">
            <TourButton handleSubmit={tourButtonClicked}/>
        </div>
    </div>
</div>

<style>

    .container {
        background: url("/img/madlib_background_image.png") fixed no-repeat content-box;

        position: relative;
    }

    .button-area {
        margin-left: -1.35rem;
    }

    .upper-text {
        font-family: 'Montserrat';
        font-weight: 300;
        font-size: 48px;
        line-height: 58.5px;
        padding-top: 6rem;
        max-width: 620px;
    }

    .mad-lib {
        position: relative;
        line-height: 40px;
        color: #FFFFFF;
        padding-top: 0.5rem;
        padding-bottom: 2rem;
        padding-left: 7rem;
        font-family: 'Montserrat';
        font-weight: 300;
        font-size: 32px;
        height: 750px;
    }

    .normal-text {
        margin-top: 0.5rem;
        max-width: 750px;
    }

</style> 

