<script setup>
    import Product from './Product.vue'
    import Search from './Search.vue'
    import Loading from './icons/loading.vue'
</script>

<template>
    <Search v-model="searchTerm" />
    <div class="row gap-0 row-gap-4">
        <Product v-if="componentExists" v-for="product in products" :key="product. id">
            <template #name>{{product.translated.name}}</template>
            <template #price>{{product.calculatedPrice.totalPrice}}</template>
            {{product.translated.description}}
        </Product>
        <Loading v-else-if="!error" class="text-center loading" />
    </div>
    <p v-if="error" class="text-center">{{ error }}</p>
</template>
  
<script>
    export default {
        components: {
            Search
        },
        data() {
            return {
                products: [],
                searchTerm: '',
                debounceTimeout: null,
                componentExists: false,
                error: null
            }
        },
        watch: {            
            searchTerm(newTerm) {                
                clearTimeout(this.debounceTimeout)
                this.debounceTimeout = setTimeout(() => {
                    this.fetchProducts()
                }, 300)
            }
        },
        mounted() {
            this.fetchProducts()
        },
        methods: {
            async fetchProducts() {
                
                const urlCategory = 'https://demo.crehler.dev/store-api/product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0'
                const urlInput = 'https://demo.crehler.dev/store-api/search'
                
                const url = this.searchTerm ? urlInput : urlCategory 
                
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'sw-access-key': 'SWSCMDV3N2DIOUNZTKNNCTBBCW'
                    },
                    body: JSON.stringify({
                        search: this.searchTerm
                    })
                }
                        
                try {
                    
                    // const response = await fetch(url, options)
                    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                    
                    console.log(response)
                    
                    if (!response.ok) {
                        throw new Error('Błąd podczas pobierania danych')
                    }
                    
                    const data = await response.json()
                    this.products = data.elements
                    
                    console.log(data)
                    console.log(this.products)
                    
                } catch (error) {
                    this.error = 'Wystąpił błąd podczas pobierania danych.'
                    console.error('Błąd podczas pobierania danych:', error)
                } finally {
                    console.log('Promise zakończony')
                }
                    
            }
        }
    }

</script>