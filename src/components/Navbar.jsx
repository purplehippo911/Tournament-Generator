import ThemeSwitcher from "./ThemeSwitch/ThemeSwitch.jsx";

const Navbar = ({hasLogo=true}) => {
    return (
        <div className="w-full bg-light-red py-4 px-2 text-center prose-l md:text-start">
            <nav className="navbar">
                <a className="container link link-hover" href="/">
                    <picture
                    className="max-w-[2rem] flex self-center mr-2">
                        <img src="../swords.png" alt="Logo which features swords crossing each others signaling a duel. " />
                    </picture>
                    <h1 className="text-white font-bold w-full text-[1.6rem]">Tournament Generator</h1>
                </a>
                {hasLogo && <ThemeSwitcher/>
                }
                
            </nav>
        </div>
    )
}

export default Navbar;