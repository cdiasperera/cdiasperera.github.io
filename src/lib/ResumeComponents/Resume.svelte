<script>
    import Technologies from "$lib/ResumeComponents/Technologies.svelte";
    import WorkExperience from "$lib/ResumeComponents/WorkExperience.svelte";
    import Awards from "$lib/ResumeComponents/Awards.svelte";
    import Education from "$lib/ResumeComponents/Education.svelte";
    import Volunteering from "$lib/ResumeComponents/Volunteering.svelte";

    import resume from '../../res/resume.json'
</script>

<h1>Resume</h1>
<div class="layout">
    <div class="tech">
        <Technologies skills={resume.skills}/>
    </div>
    <div class="work">
        <WorkExperience work={resume.work}/>
    </div>
    <div class="misc">
        <Awards awards={resume.awards}/>
        <Education education={resume.education}/>
        <Volunteering volunteer={resume.volunteer}/>
    </div>
</div>

<style>
    @media (min-width: 600px) {
        .layout {
            grid-template-columns: 1fr 2fr;
        }
    }

    @media (min-width: 1500px) {
        .layout {
            grid-template-columns: 1fr 2fr 1.5fr;
        }
    }
    .layout {
        display: grid;
    }
</style>