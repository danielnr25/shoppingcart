<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
            <h2 class="text-2xl font-bold text-center mb-6">Crear Cuenta</h2>
            <form action="">
                <div class="mb-4">
                    <label for="username" class="block text-gray-700 mb-2">Nombre</label>
                    <input type="text"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Ingrese su nombre completo">
                </div>
                <div class="mb-4">
                    <label for="username" class="block text-gray-700 mb-2">Usuario</label>
                    <input type="text"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Ingrese su usuario">
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700 mb-2">Contraseña</label>
                    <input type="password"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Ingrese su contraseña">
                </div>
                <button
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

</script>
