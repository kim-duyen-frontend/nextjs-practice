import React from 'react';
import styles from "../styles/comboboxsemester.module.scss";

const ComboboxSemester = ({ selectSemester, handleSelectSemester }) => {
    return (
        <div className={styles.comboboxSemester}>
            <select className={styles.combobox} value={selectSemester} onChange={(event) => handleSelectSemester(event)}>
                <option value="Semester">Semester</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    );
};

export default ComboboxSemester;