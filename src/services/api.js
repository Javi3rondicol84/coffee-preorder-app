import axios from "axios";

const BASE_URL = 'http://localhost:3000/api';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL+'/category/products/');
        return response.data;
    }
    catch(error) {  
        console.error('Error fetching Products, '+error);
        return [];
    }
}