import { useForm} from "react-hook-form" 

function Login(){
    // const test=useForm;
    // console.log(test)
   const {register,handleSubmit,formState:{errors}}= useForm()
   console.log(errors)
  // console.log(register)
    
    return(
        
    <div id="login-form">
        <div className="card-login">
            <h1>Login form</h1>
            <div className="card-form">
                <form  onSubmit={handleSubmit((data)=>{
                    

console.log(data)

                })}>


                <div className="input-icon">
                    <i className="fa fa-user icon" aria-hidden="true"></i>
                    <input  id="form-1"class="input-field"type="text"  {...register("name",{required:"name is required"})}placeholder="User Name"/>
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="input-icon">
                    <i className="fa fa-envelope icon" aria-hidden="true"></i>
                    <input id="form-2" class="input-field"type="email"  {...register("email",{required:"email is required"})}placeholder="Email"/>
                    {errors.name && <span>{errors.email.message}</span>}
                </div>
                <div className="input-icon">
                    <i className="fa fa-key icon" aria-hidden="true"></i>
                    <input  id="form-3"class="input-field"type="Password"   {...register("password.",{required:"password is required"})}placeholder="Password"/>
                    {errors.name && <span>{errors.password.message}</span>}
                </div>
                <div className="input-icon-1">
                <input className="form-btn" type="submit"/>
                </div>
                </form>
            </div>
           
        </div>
    </div>
    
    )
}
export default Login ;