<script>
    export let name;

    import gitea from '../res/projects/gitea.png'

    let imageMap = new Map();
    imageMap.set('gitea.png', gitea)
    let image = imageMap.get(name)
</script>
<img class="proj-img" src={image} alt="Project image"/>

<style>
    .proj-img {
        display: inline-block;
        height: 10em;
        float: left;
        margin-right: 0.5em;
    }
</style>