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

    let langToIco = new Map();
    langToIco.set("spring", Spring)
    langToIco.set("postgres",Postgres)
    langToIco.set("c",C)
    langToIco.set("java",Java)
    langToIco.set("js",JS)
    langToIco.set("express",Express)
    langToIco.set("mongo",Mongo)
    langToIco.set("css",Css)
    langToIco.set("react",React)

    let icon = langToIco.get(lang)

</script>

{#if icon}
    <div class="icon">
        <svelte:component this={icon}/>
    </div>
{:else}
    <img class="placeholder" src={placeholder} alt={lang}>
{/if}

<style>
    .icon, .placeholder {
        width: 4vh;
        height: 4vh;
        display: inline-block;
        margin-right: 1vh;
    }

    .placeholder {
        border-radius: 50%;
    }
</style>