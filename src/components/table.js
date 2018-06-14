import React from 'react';

export default (props) => {
    const tableRows = props.Data.map((students, i) => (
        <tr key={i}>
            <th>{students.student}</th>
            <th>{students.course}</th>
            <th>{students.grade}</th>
        </tr>
    ));
   
    return (
        <table className='table'>
            <thead className='thead-inverse'>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
    
        </table>
    )
}