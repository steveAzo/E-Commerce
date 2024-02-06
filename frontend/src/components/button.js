import { useState } from "react";

function MyButton() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
        
    }
    return (
        <button onClick={handleClick} className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none">
            Clicked {count} times
        </button>
    )
}

<ul role="list" className="p-6 divide-y divide-slate-200">

</ul>


export default MyButton;