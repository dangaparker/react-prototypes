import React from 'react';
import Table from './table';

const students = [{ student: 'Dan', course: 'Math', grade: 90 },
{ student: 'Bob', course: 'History', grade: 89 },
{ student: 'Emily', course: 'English', grade: 78 }];

const App = () => (<div className='container'>
    <h1>Student Grade Table</h1>
    <Table Data={students} />
</div>
)



export default App;