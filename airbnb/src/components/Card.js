import '../assets/css/style.css';
import Profile from '../assets/vectors/man.png';
import Star from '../assets/vectors/star.png';


export default function Card() {
    return(
        <div className="card">
            <div className="card--div">
                <img src={Profile} alt="Profile" className="card--img" />
                <h4><img src={Star} alt="star"
                className="card--star" /> 
                5.0 <span className="card--h3-span">(6) . USA</span></h4>
                <p>Life Lessons with Kate Zaferes</p>
                <h4><span className="card--h4-span">From $136</span> / person</h4>
            </div>
        </div>
    )
};