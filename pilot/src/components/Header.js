import Logo from '../images/logo.png';
import '../css/header.css';

export function Header() {
    return(
        <nav>
            <div className="container">
                <img src={Logo} alt="logo" ></img>
                <h1>ReactFacts</h1>
            </div>
            <h3>React Course - Project1</h3>
        </nav>
    ) 
};

