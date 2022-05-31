import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../../data/data";
import logo from "../../logo.svg";
import styles from './Navbar.module.css';

const Navbar = (props) => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = "0px";
        }
    }, [showLinks]);
    
    return (
        <nav className={`${props.offset > 50 ? `${styles.active}` : ""}`}>
            <div className={`${styles['nav-center']}`}>
                <div className={styles['nav-header']}>
                    <img src={logo} className={styles.logo} alt="logo" />
                    <button className={styles['nav-toggle']} onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className={styles['links-container']} ref={linksContainerRef}>
                    <ul className={styles.links} ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className={styles['social-icons']}>
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
