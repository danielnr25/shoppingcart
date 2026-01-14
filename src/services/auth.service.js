import axios from 'axios';
const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw new Error('Error: ' + error.response.data.message);
  }
}