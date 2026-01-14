import { login } from "@/services/auth.service";
import { ref } from "vue";

const isLoading = ref(false);
const message = ref("");
const user = ref(null);
const token = ref(localStorage.getItem("token") || null);

export const useAuth = () => {
    const loginUser = async(credentials) =>{
        try {
            
            isLoading.value = true;
            const response = await login(credentials);
            token.value = response.token;
            user.value = response.data;
            localStorage.setItem("token",response.token)
            message.value = response.message;
            return true;
        } catch (error) {
            message.value = error.message
            return false;
        } finally{
            isLoading.value = false;
        }
    }

    return {
        loginUser,
        message,
        user,
        token,
    }
}