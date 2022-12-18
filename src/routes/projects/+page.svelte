<script>
    import Header from "$lib/Header.svelte";
    import Project from "$lib/Project.svelte";
    import projects from '../../res/projects.json';
    import Footer from "$lib/Footer.svelte";
</script>

<div class="footer">
    <Header/>
    <h1> My Personal Projects</h1>

    {#each projects as project (project.name)}
        <Project project={project}/>
    {/each}

    <div class="push-footer"></div>
</div>

<Footer/>
<style>
    h1 {
        padding: 0.5em 0 0 0.5em;
    }

    .push-footer {
        padding-top: 0.5em;
    }
    .content {
        flex: 1 0 auto;
    }
</style>
