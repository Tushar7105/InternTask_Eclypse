import FeaturedPhotos from "./FeaturedPhotos"
import Footer from "./Footer"
import Header from "./Header"
import HeroSection from "./HeroSection"
import Information from "./Information"
import ProductPage from "./ProductPage"

function HomePage() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <FeaturedPhotos/>
        <ProductPage/>
        <Information/>
        <Footer />
    </div>
  )
}

export default HomePage