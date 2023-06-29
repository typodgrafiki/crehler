<template>
    <select @change="update" class="form-select" aria-label="Sortowanie">
        <option value="price-asc">Najtańsze</option>
        <option value="price-desc">Najdroższe</option>
    </select>    
</template>

<script setup>
    import { store } from '../store/state.js'
    const update = () => {
        const selectedSort = event.target.value;
        store.updateSort(selectedSort);
    }
</script>

<style>
@media (max-width: 991px){    
    .form-select
    {
        margin-top: 5px;
    }
}
</style>