<template>
    <div class="p-6">
        <div class="mb-6 flex justify-between items-center">
            <h2 class="text-2xl font-bold text-gray-700">Productos</h2>

            <select v-model="selectedCategory" class="border rounded-lg px-3 py-2">
                <option value="">Todas las categorias</option>
                <option v-for="cat in categories" :key="cat.id">{{ cat.nombre }}</option>
            </select>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
            <p v-if="filteredProducts.length === 0" class="text-gray-500 col-span-full text-center">
                No hay productos disponibles en esta categoria
            </p>
            <ProductCard 
                v-for="product in filteredProducts" 
                :key="product.id" 
                :product="product" 
                :addToCart="addToCart"    
            />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
//import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard.vue';
import { getProducts } from '@/services/products.service';
import { getCategories } from '@/services/categories.service';
import { useCart } from '@/composables/useCart';

// composables : Nos permite reutilizar lógica: carrito compras, auth, api calls, permisos, paginacion,filtros, mantener componentes limpios, dejando la logica pesada fuera.
const { addToCart } = useCart();

// ref: Es una variable reactiva, sirve para guardar un valor que cambia, se actualiza automaticante
const categories = ref([]);
const products = ref([]);
const selectedCategory = ref("");

// onMounted: es un hook de ciclo de vida, este ejecuta cuando el componente ya se montó en la página
onMounted(async () => {
    try {
        const resCategories = await getCategories();
        categories.value = resCategories;
        const resProducts = await getProducts();
        products.value = resProducts.products;
    } catch (error) {
        console.log(error)
    }
})

// computed: propiedad calculada, es decir un valor que deriva de otros estados reactivos (ref,reactive)
const filteredProducts = computed(() => {
    return selectedCategory.value ? products.value.filter((p) => p.categorianombre === selectedCategory.value) : products.value
})
</script>
