<template>
    <input class="form-control search-input" type="search" v-model="searchTerm" @input="handleInputChange" placeholder="Szukaj..." aria-label="Szukaj">
</template>

  
<script>
    export default {
        props: ['value'],
        data() {
            return {
                searchTerm: this.value,
            };
        },
        methods: {
            handleInputChange() {
                this.$emit('input', this.searchTerm);
            }
        }
    };
</script>
  
<style scoped>
    .search-input
    {
        max-width: 400px;
        margin: 6% auto;
    }
</style>