import React, { useState } from 'react'

function LoginPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [number, setNumber] = useState("+374")
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [message, setMessage] = useState("");
    const[errorPassword,setErrorPassword] = useState("")
    const[errorTel,setErrorTel] = useState("")
    const[errorBirtday,setErrorBirthday] = useState("")
    const[errorChka,setErrorChka] = useState("")
    function login(e) {
        e.preventDefault()
        if (password !== repeatPassword && password.length < 8) {
            setErrorPassword("the password is incorrect password must be at least 8 characters long")
            return
        }
        if (errorTel.length > 12) {
            setErrorTel("number must contain 8 digits")
            return
        }
        if (day > 31) {
            setErrorBirthday("you entered your age incorrectly")
            return
        }
        else if (month > 12 && month < 1) {
            setErrorBirthday("you entered your age incorrectly")
            return
        }
        else if (year > 2017 && year < 1923) {
            setErrorBirthday("you entered your age incorrectly")
            return
        }
        else if (password !== repeatPassword) {
            setErrorPassword("the password is incorrect")
            return
        }
        setErrorChka("You have successfully registered")
        return
    }
    return (
        <div>
            <div className="wrapper">
                <form onSubmit={login}>
                    <hr className="sep" />
                    <div className="group">
                        <input type="text" name='name' value={name} onChange={(evt) => {
                            setName(evt.target.value)
                        }} required="required" /><span className="highlight"></span><span className="bar"></span>
                        <label>Name</label>
                    </div>
                    <div className="group">
                        <input type="email" name='email' value={email} onChange={(evt) => {
                            setEmail(evt.target.value)
                        }} required="required" /><span className="highlight"></span><span className="bar"></span>
                        <label>Email</label>
                    </div>
                    <div className="group">
                        <input type="password" name='password' value={password} onChange={(evt) => {
                            setPassword(evt.target.value)
                        }} required="required" /><span className="highlight"></span><span className="bar"></span>
                        <label>Password</label>
                    </div>
                    <div className="group">
                        <input type="password" name='repeatPassword' value={repeatPassword} onChange={(evt) => {
                            setRepeatPassword(evt.target.value)
                        }} required="required" /><span className="highlight"></span><span className="bar"></span>
                        <label>Confirm Password</label>
                        <p style={{color:"#c6c6c6"}}>{errorPassword}</p>
                    </div>
                    <div className="group">
                        <input type="tel" tabIndex="0" name='number' value={number} onChange={(evt) => {
                            setNumber(evt.target.value)
                        }} required="required" /><span className="highlight"></span><span className="bar"></span>
                        <label>Number</label>
                        <p style={{color:"#c6c6c6"}}>{errorTel}</p>
                    </div>
                    <div>
                        <h3 className='gender'>Gender</h3>
                        <div className='divRadioInput'>
                            <span style={{ display: 'flex', color: "#c6c6c6" }}>
                                <input required="required" type="radio" value="Female" name="gender" className='inputRadio' /> Female
                                <input required="required" type="radio" value="Male" name="gender" id='inputRadio' /> Male
                            </span>
                        </div>
                    </div>
                        <h3 className='birthday'>Birthday</h3>
                    <div style={{display:"flex"}}>
                        <input type="number" name='number' value={day} onChange={(evt) => {
                            setDay(evt.target.value)
                        }} required="required" className='inputBirtday' placeholder='Day'/>
                        <input type="number" name='number' value={month} onChange={(evt) => {
                            setMonth(evt.target.value)
                        }} required="required" placeholder='Month' className='inputBirtday'/>
                        <input type="number" name='number' value={year} onChange={(evt) => {
                            setYear(evt.target.value)
                        }} required="required" placeholder='Year' className='inputBirtday'/>
                    </div>
                    <p>{errorBirtday}</p>
                    <div className="group">
                        <textarea type="textarea" name='message' value={message} onChange={(evt) => {
                            setMessage(evt.target.value)
                        }} rows="5" required="required"></textarea><span className="highlight"></span><span className="bar"></span>
                        <label>Message</label>
                    </div>
                    <div className="btn-box">
                        <button className="btn btn-submit" type="submit">submit</button>
                        <h1 style={{color:"#c6c6c6"}} >{errorChka}</h1>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default LoginPage
