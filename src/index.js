import React from 'react';
import ReactDOM from 'react-dom';

const userObj = {
    name: 'Dan',
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,
    greeting(userObj),
    document.getElementById('root')
);

function luckyNumber(){
    return Math.floor(Math.random()*1000)
}

function greeting(userObj){
   // debugger;
    const element = (<div className='container'>
    <h1>Hello, {userObj.name}</h1>
    <h2 className='text-muted'>this is your lucky number: {userObj.luckyNumber}</h2>
</div>);
    return element;
    
}




// const element = (
//     <div className='container'>
//         <h1>Hello, </h1>
//         <h2 className='text-muted'>this is your lucky number: luckyNumber</h2>
//     </div>
// );