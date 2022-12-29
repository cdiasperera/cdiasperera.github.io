<script>
    import selfie from "../../res/picture.jpg";
    import {base} from "$app/paths";
</script>

<h1>Channa Dias Perera</h1>
<div>
    <img src={selfie} alt="Selfie">
    <p>
        Hello! I am a Computing Science student at the <a href="https://www.rug.nl/">University of Groningen</a>.

        I'm interested in theoretical computer science, but I also love building stuff with software!
    </p>

    <p>
        You can find my resume <a href="{base}/resume">here</a>.
    </p>
</div>

<style>
    h1 {
        padding-left: 0.5em;
    }

    img {
        height: 15em;
        float: left;
    }

    div {
        padding: 0.5em 1em;
        overflow: auto;
    }

    div img {
        margin-right: 0.5em;
    }


</style>
