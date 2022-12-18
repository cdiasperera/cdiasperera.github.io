<script>
    import Resume from "$lib/Resume.svelte";
    import ResumeSummary from "$lib/ResumeSummary.svelte";
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<div class="content">
<Header/>
<ResumeSummary/>
<Resume/>
</div>
<Footer/>

<style>
    .content {
        flex: 1 0 auto;
    }
</style>