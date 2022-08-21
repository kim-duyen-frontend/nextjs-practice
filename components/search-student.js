import React from 'react';
import styles from "../styles/searchstudent.module.scss";

const SearchStudent = () => {
    return (
        <div className={styles.searchStudent}>
            <input className={styles.inputSearch} type="text" placeholder="Search ID and Name..."/>
        </div>
    );
};

export default SearchStudent;