import React, { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import { useNavigate } from 'react-router-dom';
import './CardStyles.css';

import cards from '../../data/card';
import { BASKET_ROUTE } from '../../routes/utils';

const Card = () => {
    const { addToBasket, basket } = useContext(CustomContext);
    const navigate = useNavigate();

    return (
        <section className="cards">
            {cards.map((card) => {
                return (
                    <div key={card.key} className="card">
                        <img
                            className="card__photo"
                            key={card.key}
                            src={card.photo}
                            alt=""
                        />
                        <div className="card__info">
                            {card.name} {card.model}
                            {card.info ? `, ${card.info}` : ''}
                            {card.color ? `, ${card.color}` : ''}
                        </div>
                        <div className="card__price">{card.price} ₽</div>

                        {basket.findIndex((item) => item.key === card.key) >
                        -1 ? (
                            <button
                                className="card__buy purchased"
                                id={card.key}
                                type="button"
                                onClick={() => {
                                    navigate(BASKET_ROUTE);
                                }}
                            >
                                В КОРЗИНУ
                            </button>
                        ) : (
                            <button
                                className="card__buy buy"
                                id={card.key}
                                type="button"
                                onClick={() => addToBasket(card)}
                            >
                                ДОБАВИТЬ В КОРЗИНУ
                            </button>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default Card;
