import { useForm} from "react-hook-form"

function Register (){
    const {register,handleSubmit,formState:{errors}}= useForm()
   console.log(errors)
 return(
<div className="reg">
    <div id="card-reg">
        <div>

                 <h1>Register form</h1>
                    <h3> For  Registration Enter your Details</h3>
                    <form onSubmit={handleSubmit((data)=>{
                    

                    console.log(data)
                    
                                    })}>

        <div id="reg-content">
                    <input id="input-field-1-reg" type="text" {...register("name",{required:"name is required"})} placeholder=" Name"/><br/>
                    {errors.name && <span>{errors.name.message}</span>}

                    
                    
                     <input id="input-field-1-reg" type="email" {...register("email",{required:"email is required"})} placeholder="Email"/><br/>
                     {errors.email && <span>{errors.email.message}</span>}
                   
                     <input id="input-field-1-reg" type="password"  {...register("pass",{required:"password is required"})}  placeholder="Password" /><br/>
                     {errors.pass&& <span>{errors.pass.message}</span>}

                     <div id="button">
                     <button id="btn" type="submit">submit</button>
                     </div>
                     
                     </div> 
            </form>
            </div>
     
</div>
</div>

    )
}

export default Register;