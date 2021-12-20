import Announcement from '../components/Anouncement'
import Categories from '../components/Catagories'
import NavBar from '../components/NavBar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Announcement />
            <NavBar />
            <Slider />
            <Categories />
            <Products />
        </div>
    )
}

export default Home
