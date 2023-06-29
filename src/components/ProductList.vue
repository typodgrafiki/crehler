<script setup>
    import { store } from '../store/state.js'
    import Product from './ProductCard.vue'
    import Search from './SearchList.vue'
    import { fetchProducts, checkCurrency } from '../init/api.js'
</script>

<template>
    <Search />
    <div class="row gap-0 row-gap-4" :class="{ loading: isLoading }">
        <Product v-for="product in products" :key="product. id">
            <template #name>{{product.translated.name}}</template>
            <template #price>Cena: {{product.calculatedPrice.totalPrice}} {{currency}}</template>
            {{product.translated.description}}
        </Product>
        <p v-if="error" class="text-center product">{{ error }}</p>
        <p v-else-if="products.length < 1" class="text-center product">Nie ma produktów do wyświetlenia.</p>
    </div>
</template>
  
<script>
    export default {
        data() {
            return {
                products: [],
                error: null,
                changeData: store.search,
                debounceTimeout: null,
                isLoading: true,
                currency: ''
            }
        },
        watch: {
            changeData: {
                deep: true,
                immediate: true,
                handler(newValue) {
                    this.isLoading = true
                    clearTimeout(this.debounceTimeout)
                    this.debounceTimeout = setTimeout(async () => {
                        await fetchProducts(newValue.query, newValue.sort)
                            .then(data => {
                                this.products = data;
                            })
                            .catch(() => {
                                this.error = 'Wystąpił błąd podczas pobierania danych.'
                            }).finally(() => {
                                this.isLoading = false   
                            })
                    }, 300)
                }
            }
        },
        mounted() {
            checkCurrency()
                .then(data => {
                    this.currency = data
                })
                .catch(() => {
                    this.error = 'Wystąpił błąd podczas pobierania danych.'
                })
        }
    }
</script>

<style>
    .product
    {
        transition: opacity .2s ease;
        opacity: 1;
        visibility: visible;
    }
    
    .loading:before
    {
        content: url('../assets/loading.svg');
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .loading > .product
    {
        opacity: 0;
        visibility: hidden;
    }
</style>