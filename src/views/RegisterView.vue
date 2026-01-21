<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
            <h2 class="text-2xl font-bold text-center mb-6">Crear Cuenta</h2>
            <form @submit.prevent="register">
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 mb-2">Correo</label>
                    <input 
                        v-model="email"
                        type="email"
                        required
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Ingrese su correo electronico">
                </div>
                <div class="mb-4">
                    <label for="username" class="block text-gray-700 mb-2">Usuario</label>
                    <input type="text"
                        v-model="username"
                        required
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Ingrese su usuario">
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700 mb-2">Contraseña</label>
                    <input 
                        type="password"
                        v-model="password"
                        required
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Ingrese su contraseña">
                </div>
                <button
                    type="submit"
                    class="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 cursor-pointer font-medium">
                    Registrarse
                </button>
            </form>

            <p class="mt-4 text-center text-gray-600">
                ¿Ya tienes cuenta?
                <router-link to="/login" class="text-blue-600 hover:underline">
                    Iniciar sesión
                </router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/composables/useAuth';
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';

const email = ref("");
const username = ref("");
const password = ref("");

const { registerUser,message} = useAuth();
const router = useRouter();

const register = async() => {
    try {   
        const data = { email: email.value,username: username.value, password: password.value}
        const response = await registerUser(data);
        toast.success(message.value);
        
        if(response == true){
            setTimeout(()=>{
                router.push("/login");
            },1500)   
        }
    } catch (error) {
         toast.error(message.value)
    }
}

</script>