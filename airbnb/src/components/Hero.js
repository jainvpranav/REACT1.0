import '../assets/css/style.css';
import Image from '../assets/vectors/collage.jpg'

export default function Hero() {
    return(
        <section class="hero--section">
            <img src={Image} alt="collage" 
            className="hero--img" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    );
}