<script>
    import Header from '$lib/Header.svelte'
    import Intro from "$lib/Intro.svelte";
    import Highlights from "$lib/Highlights.svelte";
    import News from "$lib/News.svelte";
    import Footer from "$lib/Footer.svelte";

    let introMessage1 = `
   __ __    ____
  / // /__ / / /__
 / _  / -_) / / _ \\
/_//_/\\__/_/_/\\___/
    `

    let introMessage2 = `
 ________
/_  __/ /  ___ _______
 / / / _ \\/ -_) __/ -_)
/_/ /_//_/\\__/_/  \\__/
    `

    console.log(introMessage1);
    console.log(introMessage2);
</script>
<div class="content">
<Header/>
<Intro/>
<Highlights/>
<News/>
</div>
<Footer/>

<style>
    .content {
        flex: 1 0 auto;
    }
</style>
