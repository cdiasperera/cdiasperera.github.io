<script>
    import {base} from "$app/paths";
</script>

<header>
    <nav>
        <ul>
            <li><a href="{base}/">Home</a></li>
            <li><a href="{base}/resume">Resume</a></li>
            <li><a href="{base}/projects">Projects</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        background-color: white;
        /*position: fixed;*/
        top: 0;
        left: 0;
        right: 0;
        height: 3em;
        display: flex;
        align-items: center;
        box-shadow: 0 0 25px 0 black;
    }

    header li {
        margin: 20px;
    }

    header li a {
        color: black;
        text-decoration: none;
    }

    header * {
        display: inline;
    }
</style>