<template>
    <div class="p-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">🧾 Mis Compras</h1>
        <div v-if="purchases.length === 0" class="text-gray-500 text-center mt-10">
            Aún no has realizado ninguna compra
        </div>

        <div v-else class="space-y-6">
            <div v-for="(purchase, index) in purchases" :key="index"
                class="bg-white shadow-md rounded-xl p-6 border border-gray-100">
                <div class="flex justify-between items-center mb-3">
                    <h2 class="text-lg font-semibold text-gray-800">
                        Pedido #{{ index + 1 }}
                    </h2>
                    <span class="text-sm text-gray-500">
                        Fecha: {{ purchase.date }}
                    </span>
                </div>

                <div class="divide-y divide-gray-200">
                    <div v-for="item in purchase.items" :key="item.id" class="flex justify-between py-3">
                        <div class="flex items-center gap-3">
                            <img :src="item.imagen" alt="" class="h-12 w-12 rounded-md object-cover border" />
                            <div>
                                <p class="font-medium text-gray-800">{{ item.nombre }}</p>
                                <p class="text-sm text-gray-500">
                                    S/ {{ item.precio }} x {{ item.quantity }}
                                </p>
                            </div>
                        </div>
                        <p class="font-semibold text-gray-700">
                            S/ {{ (item.precio * item.quantity).toFixed(2) }}
                        </p>
                    </div>
                </div>

                <div class="text-right font-bold text-lg mt-4">
                    Total: S/ {{ (purchase.total).toFixed(2) }}
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const purchases = ref([]);

console.log(purchases)

onMounted(() => {
    const stored = localStorage.getItem("purchases");
    if (stored) {
        purchases.value = JSON.parse(stored)
    }
})

</script>