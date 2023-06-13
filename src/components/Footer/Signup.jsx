import { useState } from "react";
import Button from "../Button"

const Signup = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState(true);

    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        if((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(email)){
            setError(false)
        }else{
            setError(true);
        }
    }
    return <div className="signUp" id="signUpWindow">
        <h1 className="titleSign">Get early access today</h1>
        <p className="textSign">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <form className="inputCont"  onSubmit={handleSubmit} noValidate>
            <input className="inputSignup" type="email" name="email"  value={email}  onChange={handleChangeEmail}/>
            <Button type={"submit"} clase={"btnFooter"} text={"Get Started For Free"}/>
        </form>
        {
            (error) && (email.length>0) ? <div className="inputOff">Please verify your email</div> : (!error) && <div className="inputOk">Thank you for registering</div>
        }
        
    </div>
    
}

export default Signup