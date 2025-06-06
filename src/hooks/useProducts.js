import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api.js";

export const useProducts = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);    
                console.log(data);
            }
            catch(error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }

        getProducts();
    }, [])

    return { products, error, loading };
}



