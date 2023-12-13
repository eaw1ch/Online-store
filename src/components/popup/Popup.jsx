import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';
import { HOME_ROUTE } from '../../routes/utils';

import './PopupStyles.css';

const Popup = ({ view, setView, info }) => {
    const navigate = useNavigate();
    const { setBasket } = useContext(CustomContext);

    const completeOrder = async () => {
        setBasket([]);
        setView(false);
        navigate(HOME_ROUTE);
    };

    return (
        <div
            style={{ display: view ? 'flex' : 'none' }}
            className="popup-screen"
        >
            <div className="popup-table">
                <button className="popup-close" onClick={completeOrder}>
                    <svg
                        className="popup-close-icon"
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
                <div className="popup-content">
                    <div className="popup-title">
                        Спасибо <b>{info.name}</b>, ваш заказ <b>№{info.id}</b>{' '}
                        оформлен.
                    </div>
                    <div className="popup-text">
                        В ближайшее время мы свяжемся с вами по телефону{' '}
                        <b>{info.phone}</b> для его подтверждения.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
