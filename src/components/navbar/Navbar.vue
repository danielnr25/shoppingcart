<script setup>
import { ref,onMounted} from 'vue';
import { toast } from 'vue3-toastify';
import Cart from '@/components/cart/Cart.vue';
import { useCart } from '@/composables/useCart';
const isLoggedIn = ref(false);
const userLogged = ref("");
const showMenu = ref(false);
const showCart = ref(false);
const { cart,total } = useCart();

// mostrar / ocultar el menú de usuario
const toggleMenu = () =>{
    showMenu.value = !showMenu.value;
}

// mostrar / ocultar el carrito
const toggleCart = () =>{
    showCart.value = !showCart.value;
}

const closeCart = () =>{
    showCart.value = false;
}

onMounted(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if(token){
        if(savedUser){
            isLoggedIn.value = true;
            userLogged.value = JSON.parse(savedUser).username;
        }
    }
})

const logout = () =>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    isLoggedIn.value = false;
    showMenu.value = false;
    userLogged.value = "";
    toast.info("Sesión cerrada");
}

</script>


<template>
    <nav class="bg-white shadow-md px-6 py-4 flex justify-between relative items-center">
        <router-link to="/">
            <h1 class="text-2xl font-bold text-gray-800 flex items-center gap-2">
                🛍️ Mi Tienda
            </h1>
        </router-link>
        <div class="flex items-center gap-6 relative">
           <button class="relative" @click="toggleCart">
                <i class="fa-solid fa-cart-shopping text-xl text-gray-700 cursor-pointer hover:text-blue-600 transition-colors"></i>
                <span class="absolute -top-3 -right-2 bg-red-500 text-white rounded-full px-1.5 text-xs py-0.5 font-bold">
                    0
                </span>
           </button>

           <!-- USUARIO LOGUEADO -->
           <div class="relative" v-if="isLoggedIn">
                <button  
                    @click="toggleMenu"
                    class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                    <i class="fa-solid fa-user text-xl"></i>
                    <span class="font-medium">{{ userLogged }}</span>
                    <i class="fa-solid fa-chevron-down text-sm"></i>
                </button>

                <!-- menu despegable -->
                <div
                    v-if="showMenu"
                   class="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2 z-50" 
                >
                   <router-link to="mis-compras" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    @click="showMenu = false"
                   > 🧾 Mis Compras</router-link>
                   <button 
                    @click="logout"
                   class="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"> 🚪 Cerrar Sesión</button>
                </div>
           </div>
           
            <!-- USUARIO NO LOGUEADO -->
            <router-link v-else to="/login" class="hover:text-blue-600 cursor-pointer transition">
                <i class="fa-solid fa-user text-xl text-gray-700"></i>
            </router-link>
        </div>
    </nav>

    <!-- carrito -->
    <div
        v-if="showCart"
        class="fixed inset-0 bg-black/40 z-40"
        @click.self="closeCart"
    >

    </div>
    <cart 
        v-if="showCart" 
        :cart="cart"
        :total="total"
    />
</template>

