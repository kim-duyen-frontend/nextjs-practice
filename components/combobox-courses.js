import React from 'react';
import styles from "../styles/comboboxcourses.module.scss";

const ComboboxCourses = () => {
    return (
        <div className={styles.comboboxCourses}>
            <select className={styles.combobox}>
                <option value="All courses">All courses</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Python Programming">Python Programming</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="C++ Programming">C++ Programming</option>
                <option value="C Programming">C Programming</option>
                <option value="JavaScript Programming">JavaScript Programming</option>

            </select>
        </div>
    );
};

export default ComboboxCourses;