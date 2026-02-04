import axios from "axios";
const API_URL = `${import.meta.env.VITE_API_URL}/sales`;

export const storesale = async (payload) => {
    try {
        const response = await axios.post(`${API_URL}`, payload);
        return response.data;
    } catch (error) {
        throw new Error('Error: ' + error.response.data.message);
    }
}

export const getSalesByUser = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/user/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error: ' + error.response.data.message);
    }
}
