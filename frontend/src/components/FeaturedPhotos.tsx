
import mainImg from "../assets/img/grid-main.png";
import img1 from "../assets/img/grid-1.png";
import img2 from "../assets/img/grid-2.png";
import img3 from "../assets/img/grid-3.png";
import logo from "../assets/img/Logo.png";

const FeaturedPhotos = () => {
  return (
    <section className="bg-black px-4 py-10 text-white flex flex-col items-center">
      <div className="w-full max-w-screen-lg space-y-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <div className="lg:col-span-2">
            <img
              src={mainImg}
              alt="Main"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="hidden lg:block">
            <img
              src={img1}
              alt="img1"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src={img2}
            alt="img2"
            className="w-full h-full object-cover rounded-xl sm:block lg:hidden"
          />
          <img
            src={img2}
            alt="img2"
            className="w-full h-full object-cover rounded-xl"
          />
          <img
            src={img3}
            alt="img3"
            className="w-full h-full object-cover rounded-xl"
          />
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-cover rounded-xl sm:hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotos;
