<script setup>
    import Logo from './LogoTop.vue'
    import Sort from './SortTop.vue'
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
                    <div class="d-flex">
                        <Sort />   
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>