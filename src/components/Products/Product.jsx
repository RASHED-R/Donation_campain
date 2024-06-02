import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { id, brand, title, Category, Description, Picture, Price, card_bg, category_bg, text_button_bg } = product || {};


    return (
        <div className=' bg-slate-200 shadow-md p-6 rounded-3xl' style={{ backgroundColor: card_bg }}>
            <img className=' h-64 w-full rounded-xl' src={Picture || ''} alt="" />
            <div className=' mt-4'>
                <h1 className=' font-bold'>Brand: {brand}</h1>
                <h1 className=' font-bold' style={{ color: category_bg }}>Title: {title}</h1>
                <h1 className=' text-sm p-2 inline-block rounded-lg my-4' style={{ backgroundColor: text_button_bg, color: category_bg }}>Category: {Category}</h1>
                <h1>Description: {Description}</h1>

                <p>Price: {Price} $</p>
                <div className=' flex justify-center mt-8'>
                    <Link className=' px-8 py-3 bg-green-400 text-white rounded' to={`/product/${id}`} state={brand}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;