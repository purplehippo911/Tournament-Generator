import Navbar from "./Navbar";

const Footer = () => {

return (
    <footer class="w-full absolute bottom-0 bg-dark-red flex items-center">
        <Navbar hasLogo={false}/>
        <a href="https://purplehipposwebsite.netlify.app">Made by Purplehippo911</a>
    </footer>
    );
}

export default Footer;