import { createContext, useState, useEffect } from 'react';

export const CustomContext = createContext();

export const Context = (props) => {
    const [basket, setBasket] = useState([]);

    const addToBasket = (item) => {
        setBasket((prev) => [...prev, { ...item, count: 1 }]);
    };

    const increaseProducts = (key) => {
        setBasket((prev) =>
            prev.map((item) => {
                if (item.key === key) {
                    if (item.count < 10) {
                        return { ...item, count: item.count + 1 };
                    }
                }
                return item;
            })
        );
    };

    const reduceProducts = (key) => {
        setBasket((prev) =>
            prev.map((item) => {
                if (item.key === key) {
                    if (item.count > 1) {
                        return { ...item, count: item.count - 1 };
                    }
                }
                return item;
            })
        );
    };

    const deleteProduct = (key) => {
        setBasket((prev) => {
            for (let i = 0; i < prev.length; i++) {
                if (prev[i].key === key) {
                    prev.splice(i, 1);
                    return [...prev];
                }
            }
            return [...prev];
        });
    };

    useEffect(() => {
        if (localStorage.getItem('basket').length > 0) {
            setBasket(JSON.parse(localStorage.getItem('basket')));
        }
    }, []);

    useEffect(() => {
        if (basket.length)
            localStorage.setItem('basket', JSON.stringify(basket));
    }, [basket]);

    const value = {
        basket,
        setBasket,
        addToBasket,
        increaseProducts,
        reduceProducts,
        deleteProduct,
    };

    return (
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    );
};
