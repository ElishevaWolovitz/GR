import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
});

export const fetchItems = async () => await api.get('/items');
export const createItem = async (item) => await api.post('/items', item);
export const updateItem = async (id, item) => await api.put(`/items/${id}`, item);
export const deleteItem = async (id) => await api.delete(`/items/${id}`);
