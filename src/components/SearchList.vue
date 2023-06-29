<template>
    <input class="form-control search-input" type="search" @input="handleInputChange" placeholder="Szukaj..." aria-label="Szukaj">
</template>

<script setup>
    import { store } from '../store/state.js'
    const handleInputChange = (event) => {
        const query = event.target.value;
        store.updateQuery(query);
    }
</script>

<style scoped>
    .search-input
    {
        max-width: 400px;
        margin: 6% auto;
    }
</style>