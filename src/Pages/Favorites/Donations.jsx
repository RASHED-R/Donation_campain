import React, { useEffect, useState } from 'react';
import Favorite from './Favorite';

const Donations = () => {

    const [favorites, setFavorites] = useState([]);
    const [noData, setNoData] = useState('');
    const [isShow, setIsShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const favoriteItem = JSON.parse(localStorage.getItem('favorites'))
        if (favoriteItem) {
            setFavorites(favoriteItem);
            const total = favoriteItem.reduce((accumulator, currentValue) => accumulator + currentValue.Price, 0)
            setTotalPrice(total)
            // Store totalPrice in local storage
            localStorage.setItem('totalPrice', total);
        } else {
            setNoData('No Data found')
        }

    }, [])
    // console.log(isShow)
    const handleRemoveLocalStorage = () => {
        localStorage.clear()
        setFavorites([]);
        setNoData('No Data found')
        // Remove totalPrice from local storage
        localStorage.removeItem('totalPrice');
    }
    return (
        <div>

            <div className=' flex justify-center items-center gap-8'>

                {
                    noData ? <div className=' h-[80vh] flex justify-center items-center'><p>{noData}</p></div> :

                        <div>
                            {

                                favorites.length > 0 && <div><button onClick={handleRemoveLocalStorage} className=' px-6 py-3 bg-red-400 rounded'>Delate Favorites</button>
                                    <p>Total: {totalPrice}</p></div>


                            }

                            <div className=' mt-10'>

                                {
                                    isShow ? favorites?.map((favorite, index) => (
                                        <Favorite favorite={favorite} key={index}></Favorite>
                                    ))
                                        : favorites.slice(0, 3).map((favorite, index) => (
                                            <Favorite favorite={favorite} key={index}></Favorite>
                                        ))
                                }
                            </div>
                            {

                                favorites.length > 3 && <button onClick={() => setIsShow(!isShow)} className=' px-6 py-3 bg-red-400 rounded mt-8'>{isShow ? 'See Less' : "See More"}</button>
                            }

                        </div>

                }
            </div>



        </div>
    );
};

export default Donations;