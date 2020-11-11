import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            fullName: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState(prevState => ({
            fullName: [...prevState.fullName, `${prevState.firstName} ${prevState.lastName}`]
        }))
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        value={this.state.firstName}
                        name='firstName'
                        placeholder='First Name'
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type='text'
                        value={this.state.lastName}
                        name='lastName'
                        placeholder='Last Name'
                        onChange={this.handleChange}
                    />
                    <br/>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <br/>
                </form>
                <ol>
                    {this.state.fullName.map((fullNames, index) => (
                        <li key={index}>
                            {fullNames}
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}
export default App