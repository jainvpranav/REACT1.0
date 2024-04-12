import '../assets/css/style.css';
import airbnb from '../assets/vectors/airbnb-logo.png';
export default function Header() {
    return (
        <nav className="header--nav">
            <img src={airbnb} alt="airbnb-logo" className="header--img" />
        </nav>
    );
};

