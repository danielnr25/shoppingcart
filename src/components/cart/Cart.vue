<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useSale } from '@/composables/useSale';
const props = defineProps(["cart", "total", "removeFromCart"]);
const router = useRouter();
const isLoggedIn = ref(false);

const { createSale, message, isLoading } = useSale();

const proceedToPayment = async () => {
    try {
        // detalle
        const cartdetail = props.cart.map(item => ({ ...item }));

        // usuario_id 
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const usuario_id = user.id;
        if (!usuario_id) {
            toast.error("Debes iniciar sesión para comprar");
            return;
        }

        if (!cartdetail) {
            toast.error("Tu carrito está vació");
            return;
        }

        // implementar el guardado en base de datos
        const response = await createSale({ usuario_id, cart: cartdetail, total: props.total })
        localStorage.removeItem("cart");
        if(response == true){
            toast.success(message)
            setTimeout(()=>{
                router.push("/mis-compras").then(() => {
                    location.reload();
                });
            },1500)   
        }
    } catch (error) {
       toast.error(message)
    }


}



onMounted(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (token) {
        if (savedUser) {
            isLoggedIn.value = true;
        }
    }
})

const alertLogin = () => {
    router.push("/login");
}

</script>

<template>
    <div class="fixed top-0 right-0 w-110 h-full bg-white shadow-lg p-4 overflow-y-auto z-50">
        <h2 class="text-xl font-semibold mb-4 text-blue-950">🛒 Carrito</h2>
        <div v-if="cart.length === 0" class="text-gray-500 text-center">
            Tu carrito está vacío.
        </div>
        <div v-else>
            <div v-for="value in cart" :key="value.id"
                class="flex items-center justify-between bg-white shadow-sm p-3 mb-3 border rounded-xl border-gray-100 transition-all duration-200">
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
                    <button @click="removeFromCart(value.id)" type="button"
                        class="cursor-pointer text-red-500 flex items-center gap-1 hover:text-red-700 transition-colors">
                        <i class="fa-solid fa-trash"></i>
                        <span>Eliminar</span>
                    </button>
                </div>
            </div>
            <!-- total -->
            <div class="mt-4 text-right font-bold text-lg">
                Total: S/ {{ total }}
            </div>

            <div class="mt-6 ">
                <button v-if="isLoggedIn" @click="proceedToPayment"
                    class="w-full bg-blue-700 mt-4 cursor-pointer text-white py-2 rounded-lg font-medium hover:bg-blue-800">
                    Proceder al pago
                </button>
                <button v-else @click="alertLogin"
                    class="w-full bg-gray-400 text-white py-2 rounded-lg font-medium cursor-not-allowed">
                    Debes iniciar sesión para pagar
                </button>
            </div>

        </div>
    </div>
</template>