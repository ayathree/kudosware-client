import { Link } from "react-router-dom";
import banner from '../assets/image/singup banner.png'


const LogIn = () => {
    return (
        <div>
            <div className="mt-5">
            <div className='flex justify-between items-center'>
            <h1 className="text-5xl font-bold">Your dream Job
                <br />
                 <span className="text-3xl text-red-500" >Is Near to You</span></h1>
            <img src={banner} alt="" />
            </div>
{/* form */}
            <div className='mt-20 mb-5 text-center text-4xl font-bold'>
            <h1 className='uppercase '>Log In</h1>
            </div>
            <div className='flex justify-center items-center mb-5'>

    <input type="email" placeholder='Your Email' className="mt-2 rounded-lg border w-1/2 border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
    
</div>

<div className='flex justify-center items-center mb-5'>

    <input type="email" placeholder='Your Password' className="mt-2 rounded-lg border w-1/2 border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
    
</div>


<div className='flex justify-center items-center mb-5'>

    <button  className="mt-2 rounded-lg border w-1/2  bg-red-500 text-white px-5 py-2.5 hover:bg-black">Log In</button>
    
</div>

{/* login */}
<div className='m-20 text-center'>
  <h1>Do Not Have An Account? <Link to={'/signUp'}><span className='font-bold'>Sign Up here</span></Link></h1>

</div>

           
            
        </div>
            
        </div>
    );
};

export default LogIn;