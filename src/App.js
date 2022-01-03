import './App.css';
import DropDownClass from './DropDownClass';
import DropDownFunctional from './DropDownFunctional'
import { createRef, useRef } from 'react';

function App() {

    const dropDownComponent = createRef();
    
    const dropDownFunctional = createRef();

    const fooo = useRef();

    const getClassState = () => {
        console.log(dropDownComponent);
    };

    const getFunctinalState = () => {
        console.log(fooo.current);
    }

    return (
        <div className="App">
            <DropDownClass title="my name" ref={dropDownComponent} />
            <br />
            <br />
            <input type="button" value="Get Class State" onClick={getClassState} />
            <br />
            <br />

            <hr />

            <DropDownFunctional ref={fooo}/>
            <br />
            <br />
            <input type="button" value="Get Functional State" onClick={getFunctinalState} />
        </div>
    );
}

export default App;
