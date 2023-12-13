import Footer from '../../components/footer/Footer';
import BasketList from '../../components/basketList/BasketList';
import BuyForm from '../../components/buyForm/BuyForm';
import './BasketPageStyles.css';

function BasketPage() {
    return (
        <section className="basket-page">
            <h1 className="legend">Корзина</h1>
            <BasketList />
            <BuyForm />
            <hr className="underline" />
            <Footer />
        </section>
    );
}

export default BasketPage;
