import { storesale, getSalesByUser } from "@/services/sales.service";
import { ref } from "vue";

export const useSale = () => {
    const isLoading = ref(false);
    const message = ref("");

    const createSale = async ({ usuario_id, cart, total }) => {
        isLoading.value = true;
        try {
            const detalles = cart.map((item) => ({
                producto_id: item.id,
                cantidad: Number(item.quantity),
                precio_unitario: Number(item.precio),
                subtotal: Number(item.precio) * Number(item.quantity)
            }))

            const payload = { usuario_id, total: Number(total), detalles }

            const response = await storesale(payload);
            message.value = response.message;
            return true;
        } catch (error) {
            message.value = error.message
            return false;
        } finally {
            isLoading.value = false;
        }
    }

    const getSaleByUser = async (id) => {
        isLoading.value = true;
        try {
            const response = await getSalesByUser(id);
            message.value = response.message;
            return response;
        } catch (error) {
            message.value = error.message
            return false;
        } finally {
            isLoading.value = false;
        }
    }

    return {
        createSale,
        getSaleByUser,
        message,
        isLoading
    }


}