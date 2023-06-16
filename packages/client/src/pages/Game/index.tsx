import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

import './styles.scss';

export const GamePage = () => {
    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};
