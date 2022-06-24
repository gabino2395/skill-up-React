import React from "react";
import swal from "@sweetalert/with-react";

const Buscador = () => {
  const buscador1 = (e) => {
    e.preventDefault()
    const keyword =     e.currentTarget.keyword.value.trim()

   
    

  
         if(keyword.length===0){
            swal(
                <h5>debe escribir algo</h5>
                )
         }   else if(keyword.length<4){
            swal(
            <h5>debe escribir por lo menos 4 letras</h5>
            )}
};

  return (
    <>
    <form  onSubmit={buscador1}>
      <label >
        <input
          
          type="text"
          name="keyword"
          placeholder="search for a movie... "
        />
      </label>

      <button  type="submit">
      buscar
      </button>
    </form>
   
    {/* <form className="d-flex align-items-center" onSubmit={submitHandler}>
      <label className="form-label mb-0 mx-2">
        <input
          className="form-control"
          type="text"
          name="keyword"
          placeholder="search for a movie... "
        />
      </label>

      <button className="btn btn-success" type="submit">
        ingresar
      </button>
    </form> */}
    </>
  );
};

export default Buscador;
