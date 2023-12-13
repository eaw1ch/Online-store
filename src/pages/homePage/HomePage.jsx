import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import './HomePageStyles.css';

function HomePage() {
    return (
        <section className="catalog-page">
            <h1 className="legend">Каталог товаров</h1>
            <Card />
            <hr className="underline" />
            <Footer />
        </section>
    );
}

export default HomePage;
