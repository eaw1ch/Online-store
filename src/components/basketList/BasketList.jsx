import { useContext, useEffect, useState } from 'react';
import { CustomContext } from '../../utils/Context';
import './BasketListStyles.css';

function BasketList() {
    const { basket, increaseProducts, reduceProducts, deleteProduct } =
        useContext(CustomContext);

    const [buyPrice, setBuyPrice] = useState(0);

    useEffect(() => {
        const countTotal = (items) =>
            items.reduce(
                (acc, curr) =>
                    acc + curr.count * Number(curr.price.replaceAll(' ', '')),
                0
            );
        setBuyPrice(countTotal(basket));
    }, [basket, buyPrice]);

    return (
        <section className="basket__list">
            {basket.map((item) => (
                <div key={item.key}>
                    <div className="basket__item">
                        <img
                            className="basket__item-photo"
                            src={item.photo}
                            width="120px"
                            alt=""
                        />

                        <div className="basket__item-info">
                            {item.name} {item.model}
                            {item.info ? `, ${item.info}` : ''}
                            {item.color ? `, ${item.color}` : ''}
                        </div>

                        <div className="basket__item-priceinfo">
                            <div className="basket__item-count">
                                <button
                                    className="count-minus"
                                    type="button"
                                    onClick={() => reduceProducts(item.key)}
                                />
                                <div className="count-display">
                                    {item.count}
                                </div>
                                <button
                                    className="count-plus"
                                    type="button"
                                    onClick={() => increaseProducts(item.key)}
                                />
                            </div>

                            <div className="basket__item-price">
                                {Number(item.price.replaceAll(' ', '')) *
                                    item.count}{' '}
                                ₽
                            </div>
                        </div>
                        <button
                            className="basket__item-remove"
                            onClick={() => deleteProduct(item.key)}
                        >
                            <svg
                                className="basket__item-remove-icon"
                                width="20"
                                height="20"
                                viewBox="0 0 14 13"
                                fill="black"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    y1="-0.5"
                                    x2="17.5227"
                                    y2="-0.5"
                                    transform="matrix(0.727587 0.686015 -0.727587 0.686015 0.250488 0.843262)"
                                />
                                <line
                                    y1="-0.5"
                                    x2="17.5227"
                                    y2="-0.5"
                                    transform="matrix(-0.727587 0.686015 -0.727587 -0.686015 13 0.135986)"
                                />
                            </svg>
                        </button>
                    </div>
                    <hr className="underline-item" />
                </div>
            ))}

            <h2 className="total-price">Сумма {buyPrice} ₽</h2>
        </section>
    );
}

export default BasketList;
