import './style.css';
import dragon from "../../assets/img-dragon.gif"

function Home() {
    return (
        <div className="flex-centre-bottom" >
            <br />
            <h2>
                Welcome to the world of
            </h2>
            <h1>
                Dungeons and Dragons
            </h1>
            <br />
            <img className='img-dragon' src={dragon} alt="dragon" />
        </div>
    );
}

export default Home;