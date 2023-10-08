// global imports
import { useNavigate } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi2";

// local imports
import { navbarItems } from "@/data/navItems";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    return (
      <nav className="w-full bg-white text-primary flex items-center justify-between py-4 px-6 fixed top-0 left-0 z-10 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]">
        <h2 role="button" onClick={() => navigate("/")} className="text-3xl font-semibold font-faustina">HouseMarket</h2>
        <section className="flex items-center gap-4 text-md">
            {navbarItems.map((item, index) => {
                return (
                    <Link key={index} to={item.path}>
                        <span className="font-medium uppercase">{item.title}</span>
                    </Link>
                )
            })}
            <div className="px-2">
                <HiOutlineHeart role="button" size={18} />
            </div>
            <div className="flex items-center gap-3 text-sm">
                <button type="button" className="border border-primary uppercase py-1.5 rounded">Login</button>
                <button type="button" className="bg-primary text-white uppercase py-1.5 rounded">Sign Up</button>
            </div>
        </section>
      </nav>
    );
}
