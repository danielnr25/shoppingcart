
export function useCart() {

    const addToCart = (product) => {
        console.log('Agregando al carrito', product)
    }
    
    return { addToCart }
}