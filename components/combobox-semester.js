import React from 'react';
import styles from "../styles/comboboxsemester.module.scss";

const ComboboxSemester = () => {
    return (
        <div className={styles.comboboxSemester}>
            <select className={styles.combobox}>
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