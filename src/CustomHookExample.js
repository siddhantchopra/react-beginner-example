import React, {useState} from 'react'
import useLocalStorage from './useLocalStorage'
import useInput from './useInput'

const CustomHookExample = () => {
    const [name, setName] = useLocalStorage('name', '')
    const [firstname, bindFirstName, resetFirstName] = useInput('')
    const [lastname, bindlastName, resetlastName] = useInput('')
    const [visible, setVisible] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setVisible(true)
    }
    const handleReset=()=>{
        resetFirstName()
        resetlastName()
        setVisible(false)
    }

    return (
        <div className="container" style={STYLE}>
            <p className="subtitle">text will be updating inside local storage using custom hook</p>
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
                <button className="btn mt-10">Submit</button>
                <button onClick={handleReset}className="btn">Reset</button> 
            </form>
            {
               visible && <p className="subtitle">Hi {firstname +" "+lastname} !</p>
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