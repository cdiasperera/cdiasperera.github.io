<script>
    export let lang;

    import placeholder from '../res/placeholder.webp'
    import Spring from '../res/icons/spring.svelte'
    import Postgres from '../res/icons/postgres.svelte'
    import C from '../res/icons/c.svelte'
    import Java from '../res/icons/java.svelte'
    import JS from '../res/icons/js.svelte'
    import Express from '../res/icons/express.svelte'
    import Mongo from '../res/icons/mongo.svelte'
    import Css from '../res/icons/css.svelte'
    import React from '../res/icons/react.svelte'
    import Nginx from '../res/icons/nginx.svelte'
    import Gitea from '../res/icons/gitea.svelte'
    import Git from '../res/icons/git.svelte'
    import DigitalOcean from '../res/icons/digitalocean.svelte'

    let langToIco = new Map();
    langToIco.set("spring", Spring)
    langToIco.set("postgres", Postgres)
    langToIco.set("c", C)
    langToIco.set("java", Java)
    langToIco.set("js", JS)
    langToIco.set("express", Express)
    langToIco.set("mongo", Mongo)
    langToIco.set("css", Css)
    langToIco.set("react", React)
    langToIco.set("digitalocean", DigitalOcean)
    langToIco.set("nginx", Nginx)
    langToIco.set("git", Git)
    langToIco.set("gitea", Gitea)

    let icon = langToIco.get(lang)

</script>

{#if icon}
    <span class="icon">
        <svelte:component this={icon}/>
    </span>
{:else}
    <img class="placeholder" src={placeholder} alt={lang}>
{/if}

<style>

    .icon, .placeholder {
        line-height: inherit;
        width: 2em;
        height: auto;
        display: inline-block;
        margin-right: 0.25em;
        background-color: var(--white);
        border-radius: 20%;
        padding: 2px;
    }

    .placeholder {
        border-radius: 50%;
    }
</style>