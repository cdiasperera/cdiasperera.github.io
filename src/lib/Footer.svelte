<script>
    import github_ico from "../res/icons/github-mark-white.png";
</script>
<div class="footer">
    <div class="footer-wrap">
        <a href="https://github.com/cdiasperera/cdiasperera.github.io"><img src={github_ico} alt="website-repo"/></a>
    </div>
</div>

<style>
    .footer {
        background-color: black;
        height: 2em;
        position: relative;
        flex-shrink: 0;
        margin-top: 2em;
    }

    .footer-wrap {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    img {
        width: 1em;
        height: 1em;
        display: inline-block;
    }
</style>