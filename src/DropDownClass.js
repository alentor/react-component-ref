import React from 'react'

class DropDownClass extends React.Component {

    state = {
        counter: 0,
        value: 'volvo'
    }

    setCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    doSomething = () => {
        console.log(`You have done something ${Math.random()}`);
    }

    render() {
        return (
            <>
                <p> Class Compoennt clicked {this.state.counter}</p>
                <button onClick={this.setCounter}>Add</button>

                <br />
                <br />

                <select name="cars" id="cars" onChange={this.handleChange}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </>
        );
    }
}

export default DropDownClass;