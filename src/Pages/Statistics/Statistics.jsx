import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useState, useEffect } from 'react';

import { useLoaderData } from 'react-router-dom';


const Statistics = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const products = useLoaderData();

    // Calculate total price from products fetched with useLoaderData
    const AllProductsTotalPrice = products.reduce((acc, currentProduct) => acc + currentProduct.Price, 0);

    useEffect(() => {
        const totalPriceFromStorage = localStorage.getItem('totalPrice');
        if (totalPriceFromStorage) {
            setTotalPrice(parseFloat(totalPriceFromStorage));
        }
    }, []);

    //     // Calculate percentages
    //     const total = totalPrice + AllProductsTotalPrice;
    //     const totalPricePercentage = (totalPrice / total) * 100;
    //     const allProductsTotalPricePercentage = (AllProductsTotalPrice / total) * 100;
    const data = [
        { name: "Group A", value: AllProductsTotalPrice },
        { name: "Group B", value: totalPrice },
    ];
    const COLORS = ["#0088FE", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };
    return (
        <div className="flex justify-center">
            <div>
                <div>
                    <p>Total Price in Statistics Page: {totalPrice}</p>
                    <p>All Products Total Price in Statistics Page: {AllProductsTotalPrice}</p>
                </div>

                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>

                <div className=" grid gap-4 grid-cols-2">
                    <h1>Total Donation <span style={{ height: '5px', width: '50px', backgroundColor: `${COLORS[0]}`, display: 'inline-block' }}></span></h1>
                    <h1>Your Donation <span style={{ height: '5px', width: '50px', backgroundColor: `${COLORS[1]}`, display: 'inline-block' }}></span></h1>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
