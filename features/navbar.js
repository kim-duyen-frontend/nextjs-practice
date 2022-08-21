import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import Image from 'next/image';
import styles from "../styles/navbar.module.scss";
import Link from 'next/link';

const Navbar = () => {
    const [symbol, setSymbol] = useState(false);
    const menuItems = [
        {
            text: "Dashboard",
            thumbnail: "/icon/icon-1.png",
            name: "icon 1"
        },
        {
            text: "Courses",
            thumbnail: "/icon/icon-2.png",
            name: "icon 2"
        },
        {
            text: "Routine",
            thumbnail: "/icon/icon-3.png",
            name: "icon 3",
        },
        {
            text: "Exam",
            thumbnail: "/icon/icon-4.png",
            name: "icon 4"
        },
        {
            text: "Results",
            thumbnail: "/icon/icon-5.png",
            name: "icon 5"
        },
        {
            text: "Student",
            thumbnail: "/icon/icon-6.png",
            name: "icon 6"
        },
        {
            text: "Message",
            thumbnail: "/icon/icon-7.png",
            name: "icon 7"
        },
        {
            text: "Notice Board",
            thumbnail: "/icon/icon-8.png", name: "icon 8"
        },
        {
            text: "Live Class",
            thumbnail: "/icon/icon-9.png", name: "icon 9"
        }
    ];
    return (
        <div className={`${symbol ? styles.navbar : styles.scalesNav}`}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    {symbol && (
                        <div className={styles.brand}>
                            <Image src="/logo/cruise_white_small.png" width={40} height={40} objectFit="contain" />
                            <h3>Mentorcruise</h3>
                        </div>
                    )}

                    <button className={styles.hamburger} onClick={() => setSymbol(!symbol)}>
                        {symbol ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
                    </button>
                </div>
                <div className={`${symbol ? styles.menu : styles.activeMenu}`}>
                    {menuItems.map((item, index) => (
                        <Link href="#!" key={index}>
                            <a className={`${symbol ? styles.subItem : styles.scales}`}>
                                <Image src={item.thumbnail} width={20} height={20} objectFit="contain" />
                                {symbol && <p className={styles.title}>{item.text}</p>}

                            </a>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles.footer}>
                {symbol && (
                    <div className={styles.wrap}>
                        <Image src="/images/professional-architect.png" width={60} height={60} alt="professional-architect" />
                        <div className={styles.info}>
                            <p className={styles.name}>Haris Ahmed</p>
                            <p>Assistant professor</p>
                            <p>Graphic Design</p>
                        </div>
                    </div>
                )}
                <div className={styles.logout}>
                    <BiLogOut />
                </div>
            </div>
        </div>
    );
};

export default Navbar;