<script>
    import Sun from '../res/icons/sun.svelte'
    import Moon from '../res/icons/moon.svelte'

    let inDarkMode = false;
    let toggle = () => {
        window.document.body.classList.toggle('dark-mode')
        $: inDarkMode = window.document.body.classList.contains('dark-mode')
    }

</script>

<div class="icon" on:click={toggle}>
    {#if !inDarkMode}
    <svelte:component this={Sun}/>
    {:else}
    <svelte:component this={Moon}/>
    {/if}
</div>

<style>

    .icon {
        width: 2em;
        height: 2em;
        display: inline-flex;
        vertical-align: middle;
        background-color: rgba(0,0,0,0.1);
        border-radius: 20%;
        padding: 0.2em;
    }
</style>
