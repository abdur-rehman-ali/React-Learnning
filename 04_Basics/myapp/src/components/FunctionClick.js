import React from 'react'

export default function FunctionClick() {
    let clickHandler =()=>
    {
        alert('Button in functional component clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click function</button>
        </div>
    )
}
