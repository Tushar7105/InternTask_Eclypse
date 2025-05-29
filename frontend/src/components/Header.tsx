
import { Button } from "@/components/ui/button"
import logo from "@/assets/img/Logo.png"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-lg shadow-md text-xl">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">

        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" width={40} height={40} className="rounded-full" />
        </a>


        <nav className="flex items-center gap-15 text-white font-medium">
          <a href="/" className="hover:underline">About Us</a>
          <a href="/" className="hover:underline">Waitlist</a>
          <a href="/checkout" className="hover:underline">Cart</a>
          <a href="/checkout">
            <Button className="bg-white text-black hover:bg-gray-200">Buy</Button>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
