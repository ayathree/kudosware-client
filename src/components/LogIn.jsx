import { Link, useNavigate } from "react-router-dom";
import banner from '../assets/image/singup banner.png'
import { useContext, useState } from "react";
import { AuthContext } from "../routes/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const LogIn = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogIn=e=>{
        e.preventDefault();
        const form=e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user={email,password};
        console.log(user)
        setErrorMessage('');
        signIn(email, password)
        .then(result=>{
            e.target.reset();
            navigate('/resume');
            toast.success('Successfully Logged In')
            
            console.log(result.user)
        })
        .catch(error=>{
          setErrorMessage(error.message)
          toast.error("Log In fail")
            console.log(error)
        })
    }
    return (
        <div>
            <div className="mt-5">
            <div className='flex justify-between items-center'>
            <h1 className="text-5xl font-bold">Your dream Job
                <br />
                 <span className="text-3xl text-red-500" >Is Near to You</span></h1>
            <img className="hidden lg:block" src={banner} alt="" />
            </div>
{/* form */}
            <div className='mt-20 mb-5 text-center text-4xl font-bold'>
            <h1 className='uppercase '>Log In</h1>
            </div>
           <form onSubmit={handleLogIn}>
           <div className='flex justify-center items-center mb-5'>

<input type="email" name="email" placeholder='Your Email' className="mt-2 rounded-lg border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />

</div>

<div className='flex justify-center items-center mb-2'>

<input type="password" name="password" placeholder='Your Password' className="mt-2 rounded-lg border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />

</div>
{
            errorMessage && <p className="text-red-600 flex justify-center items-center">{errorMessage}</p>
          }


<div className='flex justify-center items-center mb-5'>

<button  className="mt-2 rounded-lg border md:w-1/2 w-full  bg-red-500 text-white px-5 py-2.5 hover:bg-black">Log In</button>

</div>
           </form>

{/* login */}
<div className='md:m-20 m-10 text-center'>
  <h1>Do Not Have An Account? <Link to={'/signUp'}><span className='font-bold'>Sign Up here</span></Link></h1>

</div>

           
            
        </div>
        <Toaster/>
            
        </div>
    );
};

export default LogIn;