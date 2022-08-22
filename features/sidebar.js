import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaHome } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Image from 'next/image';
import ResultStudent from "../features/result-student";
import styles from "../styles/sidebar.module.scss";

const Sidebar = () => {
    const [show, setShow] = useState(false);
    return (
        <main className={`${styles.main} ${show ? styles.spaceToggle : null}`}>
            <header className={`${styles.header} ${show ? styles.spaceToggle : null}`}>
                <div className={styles.toggle} onClick={() => setShow(!show)}>
                    <FaBars />
                </div>
            </header>
            <aside className={`${styles.sidebar} ${show ? styles.show : null}`}>
                <nav className={styles.nav}>
                    <div className={styles.wrap}>
                        <Link href="#!">
                            <a className={styles.navLogo}>
                                <i className={styles.navLogoIcon}>
                                    <FaHome />
                                </i>
                                <span className={styles.navLogoName}>Home</span>
                            </a>
                        </Link>
                        <div className={styles.list}>
                            <Link href="#!">
                                <a className={styles.navLink}>
                                    <Image src="/icon/icon-1.png" width={20} height={20} />
                                    <span className={styles.navLinkName}>Dashboard</span>
                                </a>
                            </Link>
                            <Link href="#!">
                                <a className={styles.navLink}>
                                    <Image src="/icon/icon-2.png" width={20} height={20} />
                                    <span className={styles.navLinkName}>Courses</span>
                                </a>
                            </Link>
                            <Link href="#!">
                                <a className={styles.navLink}>
                                    <Image src="/icon/icon-3.png" width={20} height={20} />
                                    <span className={styles.navLinkName}>Routine</span>
                                </a>
                            </Link>
                            <Link href="#!">
                                <a className={styles.navLink}>
                                    <Image src="/icon/icon-4.png" width={20} height={20} />
                                    <span className={styles.navLinkName}>Exam</span>
                                </a>
                            </Link>
                            <Link href="#!">
                                <a className={styles.navLink}>
                                    <Image src="/icon/icon-5.png" width={20} height={20} />
                                    <span className={styles.navLinkName}>Results</span>
                                </a>
                            </Link>
                            <Link href="#!">
                                <a className={styles.navLink}>
                                    <Image src="/icon/icon-6.png" width={20} height={20} />
                                    <span className={styles.navLinkName}>Student</span>
                                </a>
                            </Link>
                            <Link href="#!">
                                <a className={styles.navLink}>
                                    <Image src="/icon/icon-7.png" width={20} height={20} />
                                    <span className={styles.navLinkName}>Message</span>
                                </a>
                            </Link>
                            <Link href="#!">
                                <a className={styles.navLink}>
                                    <Image src="/icon/icon-8.png" width={20} height={20} />
                                    <span className={styles.navLinkName}>Notice Board</span>
                                </a>
                            </Link>
                            <Link href="#!">
                                <a className={styles.navLink}>
                                    <Image src="/icon/icon-9.png" width={20} height={20} />
                                    <span className={styles.navLinkName}>Live Class</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <Link href="#!">
                        <a className={styles.navLink}>
                            <i className={styles.navLinkIcon}>
                                <RiLogoutBoxRLine />
                            </i>
                            <span className={styles.navLinkName}>Log Out</span>
                        </a>
                    </Link>
                </nav>
            </aside>
            <ResultStudent />
        </main>
    );
};

export default Sidebar;