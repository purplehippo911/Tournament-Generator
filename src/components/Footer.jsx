import Navbar from "./Navbar";

const Footer = () => {

return (
    <footer className="w-full bg-light-red flex items-center absolute bottom-0">
        <Navbar hasLogo={false}/>
        <div className="socials-links p-5 flex h-auto w-1/5">
            <a href="https://purplehipposwebsite.netlify.app" className="w-[2.5rem] hover:scale-110" alt="Made by Purplehippo911">
                <img src="github.svg" alt="Made by Purplehippo911" className="scale-150" />
            </a>
        </div>
    </footer>
    );
}

export default Footer;