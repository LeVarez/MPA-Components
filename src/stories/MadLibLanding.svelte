<script lang="ts">
    import MadLibSelector from "./MadLibSelector.svelte";
    import MadLibSelectorLanding from "./MadLibSelectorLanding.svelte";
    import TourButton from "./TourButton.svelte";

    const arrowUnicode = `&#x2193`;
    const imagePath = './render.jpg';
 
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

<img src={imagePath} alt="background" width="500" height="500"/>

<div class="mad-lib">
    <h2>{@html arrowUnicode}</h2>
    
    <p class="title-text">Is this not for you?</p>
    <p class="normal-text">I am <MadLibSelectorLanding options={typeUserList} bind:selected={typeUser}/> and want help finding
        <br><MadLibSelectorLanding options={objectiveList} bind:selected={objective}/> to <MadLibSelectorLanding options={objectiveVerbList} bind:selected={objectiveVerb}/> 
        decisions <br> <MadLibSelectorLanding options={actionSubjectList} bind:selected={actionSubject}/></p>
    <span>
        <TourButton/>
    </span>
    
</div>


<style>

    .mad-lib {
        margin-left: 200px;
        position: relative;
        line-height: 40px;
        color: #FFFFFF;
        background-color: darkslategrey;
        padding-top: 0.5rem;
        padding-bottom: 2rem;
        padding-left: 1.5rem;
        font-family: 'Montserrat';
        font-weight: 300;
        font-size: 32px;
    }

    .title-text {
        color: black;
        font-weight: 700;
        font-size: 16px;
        margin: 0;
    }

    .normal-text {
        margin-top: 0.5rem;
    }

</style> 

