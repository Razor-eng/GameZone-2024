import { useContext } from "react"
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2"
import { ThemeContext } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <div className="flex items-center p-3 h-[10vh] w-full">
            <img src="/logo.png" alt="logo" className="w-[10%] sm:w-[30px] md:w-[60px] md:h-[60px] cursor-pointer" onClick={() => navigate('/')} />
            <div className="flex bg-slate-200 p-2 w-[80%] sm:w-full ml-1 md:mx-5 rounded-full items-center">
                <HiOutlineMagnifyingGlass />
                <input type="text" placeholder="Search Games" className="px-2 bg-transparent outline-none" />
            </div>
            <div className="w-[10%] sm:w-auto">
                {theme === "light" ?
                    <HiMoon
                        className="text-2xl md:text-[35px] bg-zinc-900 text-[#F4F1C9] p-1 rounded-full cursor-pointer"
                        onClick={() => { setTheme('dark'); localStorage.setItem('theme', 'dark') }}
                    />
                    :
                    <HiSun
                        className="text-2xl md:text-[35px] text-[#F5B027] p-1 rounded-full cursor-pointer"
                        onClick={() => { setTheme('light'); localStorage.setItem('theme', 'light') }}
                    />
                }
            </div>
        </div>
    )
}

export default Header