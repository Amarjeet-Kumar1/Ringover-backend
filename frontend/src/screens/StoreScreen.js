import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CartSide from '../components/store/CartSide';
import CatalogMiddle from '../components/store/CatalogueMiddle';
import FilterSide from '../components/store/FilterSide';
import ProductDetails from '../components/store/ProductDetails';
import data from '../data';
import './StoreScreen.css';

export default function StoreScreen() {
  const [queryParameters] = useSearchParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([...data.product]);

  useEffect(() => {
    const fetchData = () => {
      if (queryParameters.has('id')) {
        const id = queryParameters.get('id');
        const pro = data.product.find((one) => one.id === id);
        if (pro !== undefined) {
          setProduct(pro);
        }
      }
    };
    fetchData();
  }, [queryParameters]);

  return (
    <div className="store-screen">
      {queryParameters.has('id') ? (
        <ProductDetails product={product} />
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
