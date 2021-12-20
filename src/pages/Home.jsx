import Announcement from '../components/Anouncement'
import Categories from '../components/Catagories'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Announcement />
            <NavBar />
            <Slider />
            <Categories />
        </div>
    )
}

export default Home
