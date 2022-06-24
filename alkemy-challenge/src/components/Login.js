import{useNavigate,Navigate} from'react-router-dom'
import axios from 'axios'
import React from "react";
import swal from '@sweetalert/with-react'
const Login = () => {
const navigate=useNavigate()

const submitHandler=e=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;





    if (email===''|| password===''){
    
        swal(
            <h3>Los campos no pueden estar vacios</h3>
        )
    return
}
 

if(email !== '' && !regexEmail.test(email)){
    swal(
        <h3>Debes escribir una direccion de correo valida</h3>
    )
    return
}
if(email!== 'challenge@alkemy.org' || password !=='react'){
    swal(
        <h3>credenciales invalidas </h3>
    )
    return
}
console.log('ok estamos listos para enviar la informacion')
axios.post('http://challenge-react.alkemy.org',{email,password})
.then(res=>{
  swal( <h3>perfecto,estas dentro</h3>)
  const tokenRecibido=res.data.token;
  sessionStorage.setItem('token',tokenRecibido);
  // <Redirect to ="/listado"/>
  // <Link to ="/listado"/> empecemos<Link/>
//  navigate("../listado", { replace: true });

  return(
    <h1>h</h1>
    )
    
    
  })
}
let token = sessionStorage.getItem("token")

  return (
    <>
    {token && <Navigate to="/listado"/>}

      <h3>formulario login</h3>
{/* <Link to ="/listado"> emepzar</Link> */}
      <form  onSubmit={submitHandler}>
        <label>
          <span>correo electronico</span>
          <input type="text" name="email" placeholder="email" />
        </label>
        <br />
        <label>
          <span>contraseña</span>
          <input type="password" name="password" placeholder="password" />
        </label>
        <br />
        <button type="submit" name="login">
          ingresar
        </button>
      </form>
    </>
  );
};

export default Login;
