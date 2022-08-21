import React from 'react';
import styles from "../styles/content.module.scss";

const Content = () => {
    return (
        <div className={styles.content}>
            <div className='container'>
                <div className={styles.container}>
                    <div className={styles.column}>1</div>
                    <div className={styles.column}>2</div>
                    <div className={styles.column}>3</div>
                </div>
            </div>
        </div>
    );
};

export default Content;