import NavBar from "./navbar";
import {useState} from "react"



export default function Register(){
    const [state, setState]= useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success:'',
        buttonText:'Register'
    })

    const {name, email, password, error, success,buttonText} =state;
   
    const handleChange = (name) => (e) =>{
        setState({...state,[name]: e.target.value, error: '', success:'', buttonText:'Register'})
    }
          
    const handleSubmit = e =>{
        e.preventDefault()
        console.log({name, email,password})
    }


    return(
        <>
        <NavBar/>
          <div className="col-md-6 offset-md-3 ">
           <h1 >Register</h1> 
           <br />
<form action="" onSubmit={handleSubmit}>
<div className="form-group">
<input 
value={name}
onChange={handleChange('name')}   type="text" placeholder="Type your name" className="form-control"/>
</div>
<div className="form-group">
<input value={email}
  onChange={handleChange('email')}  type="email" placeholder="Type your email" className="form-control"/>
</div>
<div className="form-group">
<input value={password}
 onChange={handleChange('password')} type="password" placeholder="Type your password" className="form-control"/>
</div>
<div className="form-group">
<button className="btn btn-outline-warning">{buttonText}</button>
</div>

{JSON.stringify(state)
}
</form>
          </div>

    
        </>
    );
}