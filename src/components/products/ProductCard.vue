<template>
    <div class="bg-white rounded-2xl shadow transition p-4 flex flex-col hover:shadow-lg">
        <img
           :src="product.image"
           :alt="product.name"
           class="h-40 w-full object-cover rounded-lg mb-3 transform hover:scale-105 transition cursor-pointer"
        >
        <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
        <p class="text-sm text-gray-500 mb-1">Categoría: {{ product.category }}</p>
        <p class="font-bold text-blue-600 mb-3">S/ {{ product.price }}</p>
        <p>{{ product.stock }}</p>
        <button class="mt-auto bg-gray-800 text-white py-2 rounded-lg cursor-pointer">
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

