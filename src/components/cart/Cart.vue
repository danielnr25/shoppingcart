<script setup>
defineProps(["cart","total"]);
</script>

<template>
    <div class="fixed top-0 right-0 w-110 h-full bg-white shadow-lg p-4 overflow-y-auto z-50">
        <h2 class="text-xl font-semibold mb-4 text-blue-950">🛒 Carrito</h2>
            <div v-if="cart.length === 0" class="text-gray-500 text-center">
                Tu carrito está vacío.
            </div>
            <div v-else>
                <div
                    v-for="value in cart"
                    :key="value.id"
                    class="flex items-center justify-between bg-white shadow-sm p-3 mb-3 border rounded-xl border-gray-100 transition-all duration-200"
                >
                    <div class="flex items-center gap-4">
                        <img class="h-16 w-16" :src="value.imagen" :alt="value.nombre">
                        <div>
                            <h3 class="font-semibold text-gray-800">{{ value.nombre }}</h3>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="text-gray-700 font-medium">S/ {{ value.precio }}</span>
                                <span class="text-gray-400 text-sm">x{{ value.quantity }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-end gap-2">
                        <span>
                            S/ {{ (value.precio * value.quantity).toFixed(2) }}
                        </span>
                        <button type="button" class="cursor-pointer text-red-500 flex items-center gap-1 hover:text-red-700 transition-colors">
                            <i class="fa-solid fa-trash"></i>
                            <span>Eliminar</span>
                        </button>
                    </div>
                </div>
                   <!-- total -->
                <div class="mt-4 text-right font-bold text-lg">
                    Total: S/ {{ total }}
                </div>
            </div>
    </div>
</template>