<template>
    <nav class="bg-white shadow-md px-6 py-4 flex justify-between relative items-center">
        <router-link to="/">
            <h1 class="text-2xl font-bold text-gray-800 flex items-center gap-2">
                Mi tienda
            </h1>
        </router-link>
        <div class="flex items-center gap-6 relative">
           <button class="relative">
                <i class="fa-solid fa-cart-shopping text-xl text-gray-700 cursor-pointer hover:text-blue-600 transition-colors"></i>
                <span class="absolute -top-3 -right-2 bg-red-500 text-white rounded-full px-1.5 text-xs py-0.5 font-bold">
                    0
                </span>
           </button>


            <router-link to="/login" class="hover:text-blue-600 cursor-pointer transition">
                <i class="fa-solid fa-user text-xl text-gray-700"></i>
            </router-link>
        </div>
    </nav>
</template>

<script setup>

</script>

