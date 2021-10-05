import Hero from './Hero';
import Info from './Info';
import Discover from './Discover';
import Progress from './Progress';

const Home = ()=> {
    return (
        <div className="Home">
            <Hero />
            <Info />
            <Discover />
            <Progress />
        </div>
    )
}

export default Home;