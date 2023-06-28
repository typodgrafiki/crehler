<script setup>
    import Logo from './Logo.vue'
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-lg">
                <Logo title="Shopware Listing" />                    
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <form class="d-flex">
                        <select class="form-select" aria-label="Default select example">
                            <option value="1" selected>Najtańsze</option>
                            <option value="2">Najdroższe</option>
                        </select>
                    </form>
                </div>
            </div>
        </nav>
    </header>
</template>