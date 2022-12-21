<script>
    import Resume from "$lib/ResumeComponents/Resume.svelte";
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<div class="content">
    <Header/>
    <div class="resume">
        <Resume/>
    </div>
</div>
<Footer/>

<style>
    .content {
        flex: 1 0 auto;
    }
    .resume {
        margin-left: 0.5em;
    }
</style>