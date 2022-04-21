import styles from "../components/Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {

    const listMenu = menuItems;

    return (
        <nav className={styles.menu_container}>

            {listMenu.map((item) =>
                <ActiveLink key={item.text} text={item.text} href={item.href} />
            )}


            {/*<ActiveLink text="Home" href="/" />
            <ActiveLink text="About" href="/about" />
            <ActiveLink text="Contact" href="/contact" />
    <ActiveLink text="Pricing" href="/pricing" />*/}
        </nav>
    );
};