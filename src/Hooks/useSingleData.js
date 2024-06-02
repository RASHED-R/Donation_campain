import React, { useEffect, useState } from 'react';

const useSingleData = () => {
    const url = './donation.json'
    const [data, setData] = useState(null);
    console.log("first", data)
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data.products));
    }, [url]);

    return data;
};

export default useSingleData;