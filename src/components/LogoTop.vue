<script setup>
    defineProps({
        title: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <h1 class="logo navbar-brand">
        <a href="/">
            {{ title }}
        </a>
    </h1>
</template>

<style scoped>
    h1 a 
    {
        font-size: 1rem;
        font-weight: 700;
        color: inherit;
        text-decoration: none;
    }
</style>
