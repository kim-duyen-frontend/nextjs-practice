import React, { useMemo, useState } from 'react';
import ComboboxSemester from '../components/combobox-semester';
import ComboboxCourses from "../components/combobox-courses";
import ItemTable from '../components/item-table';
import SearchStudent from '../components/search-student';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/resultstudent.module.scss";


const ResultStudent = () => {
    const dataStudents = [
        {
            id: "2021134071",
            name: "Arafat Ahmed Chowdhury",
            department: "Graphic Design",
            semester: "2",
            scores: 3.45,
            rank: "A",
        },
        {
            id: "2021134072",
            name: "Jawadur Rahman Jawad",
            department: "Graphic Design",
            semester: "2",
            scores: 3.45,
            rank: "A",
        },
        {
            id: "2021134073",
            name: "Shekh Al Raihan",
            department: "Graphic Design",
            semester: "3",
            scores: 0,
            rank: "D",
        },
        {
            id: "2021134074",
            name: "Jawadur Rahman Jawad",
            department: "JavaScript Programming",
            semester: "1",
            scores: 3.45,
            rank: "A",
        },
        {
            id: "2021134075",
            name: "Leanne Graham",
            department: "Python Programming",
            semester: "4",
            scores: 3.45,
            rank: "A",
        },
        {
            id: "2021134076",
            name: "Dennis Schulist",
            department: "JavaScript Programming",
            semester: "2",
            scores: 2.45,
            rank: "B",
        },
        {
            id: "2021134077",
            name: "Ervin Howell",
            department: "Machine Learning",
            semester: "1",
            scores: 3.45,
            rank: "A",
        },
        {
            id: "2021134078",
            name: "Clementine Bauch",
            department: "Machine Learning",
            semester: "4",
            scores: 1.45,
            rank: "C",
        },
        {
            id: "2021134079",
            name: "Patricia Lebsack",
            department: "C++ Programming",
            semester: "1",
            scores: 3.45,
            rank: "A",
        },
        {
            id: "20211340710",
            name: "Chelsey Dietrich",
            department: "C Programming",
            semester: "2",
            scores: 3.45,
            rank: "A",
        },
    ];
    const [selectSemester, setSelectSemester] = useState(0);
    const [selectCourse, setSelectCourse] = useState("");

    const handleSelectSemester = (event) => {
        event.preventDefault();
        setSelectSemester(event.target.value);
    }
    const handleSelectCourse = (event) => {
        event.preventDefault();
        setSelectCourse(event.target.value);
    }
    const filterOrSearchData = useMemo(() => {
        let temp = dataStudents;
        if (selectSemester) {
            temp = temp.filter((data) => {
                if (selectSemester === "Semester") {
                    return data;
                } else {
                    if (data.semester === selectSemester) {
                        return data;
                    }
                }
            })
        }
        if (selectCourse) {
            temp = temp.filter((data) => {
                if (selectCourse === "All courses") {
                    return data;
                } else {
                    if (data.department === selectCourse) {
                        return data;
                    }
                }
            })
        }
        return temp;
    }, [selectSemester, selectCourse])
    return (
        <div className={styles.resultstudent}>
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Sheet Student</h3>
                    </div>
                    <div className={styles.column}>
                        <SearchStudent />
                        <div className={styles.wrap}>
                            <ComboboxSemester selectSemester={selectSemester} handleSelectSemester={handleSelectSemester} />
                            <ComboboxCourses selectCourse={selectCourse} handleSelectCourse={handleSelectCourse} />
                        </div>
                    </div>
                    <div className={styles.column}>
                        <table>
                            <thead>
                                <tr>
                                    <th>STUDENT NAME</th>
                                    <th>ID NUMBER</th>
                                    <th>DEPARTMENT</th>
                                    <th>SEMESTER</th>
                                    <th>
                                        <div className={styles.sortResult}>
                                            RESULT{" "}
                                            <Link href="#!">
                                                <a>
                                                    <Image
                                                        src="/images/sort.png"
                                                        width={12}
                                                        height={12}
                                                        alt="sort"
                                                    // onClick={() => setTypeSort(!typeSort)}
                                                    />
                                                </a>
                                            </Link>

                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterOrSearchData.map((student) => (
                                    <ItemTable key={student.id} student={student} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultStudent;
