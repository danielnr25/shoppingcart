<template>
    <div class="p-6">
       <div class="mb-6 flex justify-between items-center">
            <h2 class="text-2xl font-bold text-gray-700">Productos</h2>

            <select name="" id="" class="border rounded-lg px-3 py-2">
                <option value="">Todas las categorias</option>
                <option value="">Laptos</option>
                <option value="">Parlantes</option>
                <option value="">Cargadores</option>
            </select>
       </div>
       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
            <ProductCard 
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
       </div>
    </div>
</template>

<script setup>
import ProductCard from '@/components/products/ProductCard.vue';
import { products } from '@/data/products';



</script>
