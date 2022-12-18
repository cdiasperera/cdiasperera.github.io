<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/projects">Projects</a></li>
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
        height: 80px;
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