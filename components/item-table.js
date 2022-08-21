import React from 'react';

const ItemTable = ({ student }) => {
    return (
        <tr>
            <td>{student.name}</td>
            <td>{student.id}</td>
            <td>{student.department}</td>
            <td>{`${student.semester}/4`}</td>
            <td>{`${student.scores} (${student.rank})`}</td>
        </tr>
    );
};

export default ItemTable;