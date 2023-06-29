const domain = 'https://demo.crehler.dev/store-api'
const apiKey = 'SWSCMDV3N2DIOUNZTKNNCTBBCW'

export async function checkCurrency() {
    
    const url = `${domain}/context`;
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json', 
            'sw-access-key': apiKey
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.currency.symbol
    } catch (error) {
        throw new Error('Błąd podczas pobierania danych')
    }
}

export async function fetchProducts(query, param) {
                
    const urlCreate = (query) => {
        if (!query) {
            return `${domain}/product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0`
        }
        return `${domain}/search`   
    }
    
    const url = urlCreate(query)
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'sw-access-key': apiKey
        },
        body: JSON.stringify({
            search: query,
            order: param
        })
    }
            
    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error('Błąd podczas pobierania danych')
        }
        const data = await response.json()
        return data.elements;
    } catch (error) {
        throw new Error('Błąd podczas pobierania danych')
    }       
}