<script>
    import {base} from "$app/paths";
    import DarkModeToggle from "$lib/DarkModeToggle.svelte";
</script>

<header>
    <nav>
        <div>
            <ul>
                <li><a href="{base}/">Home</a></li>
                <li><a href="{base}/resume">Resume</a></li>
                <li><a href="{base}/projects">Projects</a></li>
            </ul>
        </div>
        <div class="at-right">
            <DarkModeToggle/>
        </div>
    </nav>
</header>

<style>
    .at-right {
        margin-top: 0.4em;
        margin-right: 2em;
    }
    header {
        top: 0;
        left: 0;
        right: 0;
        height: 3em;
        display: flex;
        align-items: center;
        box-shadow: 0 0 25px 0 black;
    }

    nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    header li {
        vertical-align: middle;
        display: inline-flex;
        margin: 10px;
    }

    @media (min-width: 390px) {
        header li {
            margin: 20px;
        }

        .at-right {
            margin-top: 1em;
        }
    }

    header li a {
        color: var(--txt-color);
        text-decoration: none;
    }
</style>