import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Popup from '../popup/Popup';
import axios from 'axios';

import './BuyFormStyles.css';

function BuyForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        reset,
    } = useForm({ mode: 'onChange' });

    const regex = /^((\+7|7|8)+([0-9]){10})$/;

    const [view, setView] = useState(false);
    const [info, setInfo] = useState({ name: '', phone: '', id: '' });

    const onSubmit = async (data) => {
        const userData = {
            to: data.email,
            name: data.name,
            phone: data.phone,
            id: Math.round(Math.random() * 10000),
        };
        setInfo((prevState) => ({
            ...prevState,
            name: userData.name,
            phone: userData.phone,
            id: userData.id,
        }));
        console.log(userData);
        await axios.post('http://localhost:5000/', userData);
        reset();
        setView(true);
    };

    return (
        <div className="buy-form">
            <h2 className="legend">Пожалуйста, представьтесь</h2>
            <form
                className="buy-form__element"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <input
                        className={
                            errors?.name?.message
                                ? 'buy-form__element-input error'
                                : 'buy-form__element-input'
                        }
                        placeholder="Ваше имя"
                        {...register('name', { required: 'Введите имя' })}
                    />
                    {errors?.name && (
                        <div className="error-message">
                            {errors.name.message}
                        </div>
                    )}
                </div>

                <div>
                    <input
                        className={
                            errors?.phone?.message
                                ? 'buy-form__element-input error'
                                : 'buy-form__element-input'
                        }
                        placeholder="Телефон"
                        {...register('phone', {
                            required: 'Введите номер телефона',
                            pattern: {
                                value: regex,
                                message: 'Проверьте правильность номера',
                            },
                        })}
                    />
                    {errors?.phone && (
                        <div className="error-message">
                            {errors.phone.message}
                        </div>
                    )}
                </div>

                <div>
                    <input
                        className={
                            errors?.email?.message
                                ? 'buy-form__element-input error'
                                : 'buy-form__element-input'
                        }
                        placeholder="Email"
                        {...register('email', {
                            required: 'Введите email',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                                message: 'Введите корректный email',
                            },
                        })}
                    />
                    {errors?.email && (
                        <div className="error-message">
                            {errors.email.message}
                        </div>
                    )}
                </div>

                <input
                    className="buy-form__element-submit"
                    type="submit"
                    value="ОФОРМИТЬ ЗАКАЗ"
                    disabled={!isDirty || !isValid}
                />
            </form>
            <Popup view={view} setView={setView} info={info} />
        </div>
    );
}

export default BuyForm;
