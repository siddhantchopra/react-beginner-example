import React from 'react'
import useLocalStorage from './useLocalStorage'
import useInput from './useInput'

const CustomHookExample = () => {
    const [name, setName] = useLocalStorage('name', '')
    const [firstname, bindFirstName, resetFirstName] = useInput('')
    const [lastname, bindlastName, resetlastName] = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault()
        resetFirstName()
        resetlastName()
    }

    return (
        <div className="container" style={STYLE}>
            <p className="subtitle">Here is implementation of local storage custom hook</p>
            <input
                type="text"
                placeholder="Type Here..."
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <p className="subtitle">Here is implementation of Form custom hook</p>

            <form onSubmit={handleSubmit} style={FORM} id="custom">
                <input
                    type="text" placeholder="First Name" className="mt-10"
                    {...bindFirstName}
                />
                <input placeholder="Last Name" className="mt-10"
                    type="text"
                    {...bindlastName}
                />
                <button className="mt-10">Reset</button>
            </form>
            {
                <p className="subtitle">{firstname + lastname}</p>
            }
        </div>
    )
}

export default CustomHookExample

const STYLE = {
    textAlign: 'center'
}
const FORM = {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    margin: '0 auto',
}