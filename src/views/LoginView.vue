<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
            <h2 class="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
            <form @submit.prevent="login">
                <div class="mb-4">
                    <label for="username" class="block text-gray-700 mb-2">Usuario</label>
                    <input 
                        v-model="username"
                        type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" placeholder="Ingrese su usuario"
                        required
                        >
                </div>
                 <div class="mb-4">
                    <label for="password" class="block text-gray-700 mb-2">Contraseña</label>
                    <input
                        v-model="password" 
                        type="password" 
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" placeholder="Ingrese su contraseña" required>
                </div>
                <button
                    type="submit" 
                    class="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 cursor-pointer font-medium">
                    Ingresar
                </button>
            </form>

            <p class="mt-4 text-center text-gray-600">
                ¿No tienes una cuenta? 
                <router-link to="/register" class="text-blue-600 hover:underline">
                    Regístrate
                </router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/composables/useAuth';
import { useRouter } from "vue-router";
import { toast } from 'vue3-toastify';

const {loginUser,message,user,token} = useAuth();
const router = useRouter();
// ref
const username = ref("");
const password = ref("");


const login = async () => {
    const data = {
        username: username.value,
        password: password.value
    }
    const response = await loginUser(data);
    if(response == true){
        localStorage.setItem("user",JSON.stringify({username: username.value}));
        router.push("/").then(()=>{
            location.reload();
        })
    }else{
        toast.error(message.value)
    }
}


</script>

