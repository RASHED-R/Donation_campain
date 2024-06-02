import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const products = useLoaderData()

    useEffect(() => {

        const findProduct = products?.find(product => product.id == id)
        setProduct(findProduct)
    }, [id, products])


    // console.log(products, "products")
    return (
        <ProductCard product={product}></ProductCard>
    );
};

export default ProductPage;