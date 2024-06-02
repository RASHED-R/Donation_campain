import React, { useState, useEffect } from 'react';
import Product from './Product';
import { useLoaderData } from 'react-router-dom';



// with onchange

// const Products = () => {
//     const products = useLoaderData();
//     const [searchQuery, setSearchQuery] = useState('');

//     const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value);
//     }

//     const filteredProducts = products?.filter(product =>
//         product.Category.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <div className='my-10'>
//             <h1 className='text-center text-2xl'>All Products</h1>

//             <div className='w-1/2 m-auto'>
//                 <label className="input input-bordered flex items-center gap-2">
//                     <input
//                         type="text"
//                         className="grow searchInput border border-cyan-700"
//                         placeholder="Search by category"
//                         value={searchQuery}
//                         onChange={handleSearchChange}
//                     />
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 cursor-pointer">
//                         <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
//                     </svg>
//                 </label>
//             </div>

//             <div className='grid grid-cols-3 gap-8 mt-12'>
//                 {filteredProducts?.map((product, index) => (
//                     <Product product={product} key={index} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Products;

// with onclick
const Products = () => {
    const products = useLoaderData();
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearchClick = () => {
        const searchInput = document.querySelector('.searchInput').value;
        const filtered = products?.filter(product =>
            product.Category.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredProducts(filtered);
    }



    return (
        <div className='my-10'>
            <h1 className='text-center text-2xl'>All Products</h1>

            <div className='w-1/2 m-auto'>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow searchInput border border-cyan-700"
                        placeholder="Search by category"
                    />
                    <svg
                        onClick={handleSearchClick}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70 cursor-pointer"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </div>

            <div className='grid grid-cols-3 gap-8 mt-12'>
                {filteredProducts?.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            </div>
        </div>
    );
};

// onChange and onClick 

// const Products = () => {
//     const products = useLoaderData();
//     const [filteredProducts, setFilteredProducts] = useState(products);
//     const [searchInput, setSearchInput] = useState('');

//     useEffect(() => {
//         const filtered = products?.filter(product =>
//             product.Category.toLowerCase().includes(searchInput.toLowerCase())
//         );
//         setFilteredProducts(filtered);
//     }, [searchInput, products]);

//     const handleSearchChange = (event) => {
//         setSearchInput(event.target.value);
//     }

//     const handleSearchClick = () => {
//         const filtered = products?.filter(product =>
//             product.Category.toLowerCase().includes(searchInput.toLowerCase())
//         );
//         setFilteredProducts(filtered);
//     }

//     return (
//         <div className='my-10'>
//             <h1 className='text-center text-2xl'>All Products</h1>

//             <div className='w-1/2 m-auto'>
//                 <label className="input input-bordered flex items-center gap-2">
//                     <input
//                         type="text"
//                         className="grow searchInput border border-cyan-700"
//                         placeholder="Search by category"
//                         value={searchInput}
//                         onChange={handleSearchChange}
//                     />
//                     <svg
//                         onClick={handleSearchClick}
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 16 16"
//                         fill="currentColor"
//                         className="w-4 h-4 opacity-70 cursor-pointer"
//                     >
//                         <path
//                             fillRule="evenodd"
//                             d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//                             clipRule="evenodd"
//                         />
//                     </svg>
//                 </label>
//             </div>

//             <div className='grid grid-cols-3 gap-8 mt-12'>
//                 {filteredProducts?.map((product, index) => (
//                     <Product product={product} key={index} />
//                 ))}
//             </div>
//         </div>
//     );
// };

export default Products;
