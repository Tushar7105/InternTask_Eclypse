import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-2 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-2 items-start">

        <div className="space-y-6">
          <div className="flex items-center space-x-1 text-2xl font-bold">
            <span>Eclypse</span>
            <sup className="text-xs">↗</sup>
          </div>
          <nav className="text-sm space-y-1">
            <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-gray-300">
              <a href="#">Home</a><span>/</span>
              <a href="#">About</a><span>/</span>
              <a href="#">Buy</a><span>/</span>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-gray-300">
              <a href="#">Our Customers</a><span>/</span>
              <a href="#">Contacts</a>
            </div>
          </nav>
        </div>


        <div className="flex flex-col gap-6 items-start md:items-end w-full md:w-auto">
          <div className="flex flex-col md:items-end gap-1 text-sm">
            <p className="text-gray-400 tracking-widest">CONTACT</p>
            <p className="text-lg font-semibold">+91 123-456-7890</p>
          </div>
          <div className="flex flex-col md:items-end gap-1 text-sm">
            <p className="text-gray-400 tracking-widest">EMAIL</p>
            <p>eclypse@gmail.com</p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      <div className="text-right mt-8 text-xs text-gray-500">
        © Eclypse 2025
      </div>
    </footer>
  );
};

export default Footer;
