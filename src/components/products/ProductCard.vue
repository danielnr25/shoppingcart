<template>
    <div class="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 
           p-5 flex flex-col border border-transparent hover:border-gray-200">
        <div class="relative overflow-hidden rounded-xl">
            <img :src="product.image" :alt="product.name"
                class="h-48 w-full object-cover rounded-xl transform group-hover:scale-110 transition duration-500">
            <span
                class="absolute top-2 right-2 bg-white/90 text-gray-900 font-bold text-sm px-3 py-1 rounded-lg shadow">S/
                {{ product.price }}</span>

            <span v-if="product.stock === 0"
                class="absolute top-2 left-2 bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-lg shadow animate-pulse">
                Agotado
            </span>
            <span v-else-if="product.stock < 5"
                class="absolute top-2 left-2 bg-yellow-400 text-gray-900 font-bold text-xs px-3 py-1 rounded-lg shadow">
                Últimos {{ product.stock }}
            </span>
            <span v-else
                class="absolute top-2 left-2 bg-green-600 text-white font-bold text-xs px-3 py-1 rounded-lg shadow">
                Stock: {{ product.stock }}
            </span>


        </div>

        <h3 class="mt-4 text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{{
            product.name }}</h3>
        <p class="text-sm text-gray-500 mt-1">Categoría: {{ product.category }}</p>

        <button 
            :disabled="product.stock===0"
            class="mt-5 bg-linear-to-r from-blue-600 to-indigo-600 
             hover:from-indigo-700 hover:to-blue-700 
             disabled:bg-gray-300 disabled:text-gray-500 
             disabled:cursor-not-allowed disabled:shadow-none
             text-white font-medium py-2 rounded-xl shadow-md hover:shadow-xl 
             transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
            Agregar al carrito
        </button>
    </div>
</template>

<script setup>
// const props = defineProps({
//     products:{
//        type: Array,
//        required:true 
//     }
// })
defineProps(['product'])
</script>
