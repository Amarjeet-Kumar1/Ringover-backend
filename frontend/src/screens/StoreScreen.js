import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import CartSide from '../components/store/CartSide';
import CatalogMiddle from '../components/store/CatalogueMiddle';
import FilterSide from '../components/store/FilterSide';
import ProductDetails from '../components/store/ProductDetails';
import './StoreScreen.css';

export default function StoreScreen() {
  const [queryParameters] = useSearchParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/v1/product/all');
      setProducts([...data]);
    };
    fetchData();
  }, [setProducts]);
  return (
    <div className="store-screen">
      {queryParameters.has('id') ? (
        <ProductDetails />
      ) : (
        <>
          <FilterSide setProducts={setProducts} />
          <CatalogMiddle products={products} />
        </>
      )}

      <CartSide />
    </div>
  );
}
