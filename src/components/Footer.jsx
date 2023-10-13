import Navbar from "./Navbar";

const Footer = () => {

return (
    <footer class="w-full bg-light-red flex items-center relative bottom-0">
        <Navbar hasLogo={false}/>
        <div class="socials-links p-5 flex h-auto w-1/5">
            <a href="https://purplehipposwebsite.netlify.app" className="w-[2.5rem]">Made by Purplehippo911</a>
        </div>
    </footer>
    );
}

export default Footer;