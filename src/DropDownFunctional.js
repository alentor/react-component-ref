import React, { useState } from 'react';

function DropDownFunctional() {


    const [count, setCount] = useState(0);
    const [value, setValue] = useState('volvo');


    return (
        <>

            <p> Functional Compoennt clicked {count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>


            <br />
            <br />

            <select name="cars" id="cars" onChange={(e) => setValue(e.target.value)}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </>
    );
}

export default DropDownFunctional;