import { reactive } from 'vue'

export const store = reactive({
    search: {
        query: '',
        sort: 'price-asc'
    },
    updateSort(value) {
        this.search.sort = value
    },
    updateQuery(value) {
        this.search.query = value
    }
})