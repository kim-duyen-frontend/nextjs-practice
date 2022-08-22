import React from 'react';
import styles from "../styles/searchstudent.module.scss";

const SearchStudent = ({ textSearch, handleSearch }) => {
    return (
        <div className={styles.searchStudent}>
            <input className={styles.inputSearch} type="text" placeholder="Search ID and Name..." value={textSearch} onChange={(event) => handleSearch(event)} />
        </div>
    );
};

export default SearchStudent;