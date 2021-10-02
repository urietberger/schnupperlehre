import './styles.css';
import video from './img/Frontify-Brandhome-Mood.mp4';



function Home() {
    return (
        <div className="content--center-center">
            <h1>Home</h1>
            <video autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}

export default Home;
