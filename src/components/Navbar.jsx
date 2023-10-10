import ThemeSwitcher from "./ThemeSwitch/ThemeSwitch.jsx";

const Navbar = ({hasLogo=true}) => {
    return (
        <div className="w-full bg-light-red p-4 prose-l dark:bg-dark-red">
            <nav className="navbar">
                <a className="container link link-hover" href="/">
                    <picture
                    className="max-w-[2.5rem] flex align-center mr-2">
                        <img src="../swords.png" alt="Logo which features swords crossing each others signaling a duel. " />
                    </picture>
                    <h1 className="text-white font-bold">Tournament Generator</h1>
                </a>
                {hasLogo && <ThemeSwitcher/>
                }
                
            </nav>
        </div>
    )
}

export default Navbar;