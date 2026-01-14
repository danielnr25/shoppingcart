import axios from 'axios';
const API_URL = `${import.meta.env.VITE_API_URL}/categories`;

export const getCategories = async () =>{
    try {
        const response = await axios.get(`${API_URL}/allcategories`);
        return response.data;
    } catch (error) {
        throw new Error("Error: " + error.message)
    }
}