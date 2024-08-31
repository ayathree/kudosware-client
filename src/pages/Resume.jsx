
import { Link } from 'react-router-dom';
import resume from '../assets/image/resume profile.png'
import { AuthContext } from '../routes/AuthProvider';
import { useContext } from 'react';

const Resume = () => {
  const {user} = useContext(AuthContext);

  

    return (
        <div className='mt-5'>
            <div className='flex justify-between items-center'>
            <h1 className="text-5xl font-bold">Your dream Job
                <br />
                 <span className="text-3xl text-red-500" >Is Near to You</span></h1>
            <img className='hidden lg:block rounded-l-full' src={resume} alt="" />
            </div>
           <Link to={`/profile/${user.email}`}> <button className='btn bg-red-500 text-white font-bold md:text-2xl hover:bg-black'>{user.email} PROFILE HERE</button></Link>
            {/* resume */}
            <div className='md:m-10'>
                <div className='border-2 border-black md:p-7 p-2 my-10 md:my-0 '>
                   <div className='flex flex-col md:flex-row justify-between items-center'>
                   <h1 className='md:text-3xl uppercase'>Personal Information</h1>
                   <button className='bg-red-500 p-2 text-white rounded-md hover:bg-black'>Upload Your CV</button>
                   </div>
                   {/* personal info div */}
                   <div className='flex flex-col md:flex-row justify-between items-center md:gap-4 '>
                   <input type="text" placeholder='name' className="md:my-4 my-2 w-full  border md:w-1/2 border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="email" placeholder='email'  className="md:my-4 w-full  border md:w-1/2  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>
                   {/* div 2 */}
                   <div className='flex flex-col md:flex-row justify-between items-center md:gap-4 ' >
                   <input type="date" placeholder='' className="md:my-4 my-2  border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="number" placeholder='your number' className="md:my-4 border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>
                   {/* div 3 */}
                   <div className='flex flex-col md:flex-row justify-between items-center md:gap-4 '>
                   <input type="text" placeholder='Address' className="md:my-4 my-2 w-full border md:w-1/2 border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="text" placeholder='Designation'  className="md:my-4 border md:w-1/2 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>
                   {/* div 4 */}
                   <div className='flex flex-col md:flex-row justify-between items-center md:gap-4'>
                   <select className=" md:my-4 my-2 border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
  <option disabled selected>Age</option>
  <option>20-25</option>
  <option>26-30</option>
  <option>30-35</option>
</select>
<select className=" md:my-4  border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
  <option disabled selected>Gender</option>
  <option>Male</option>
  <option>Female</option>
  <option>Other</option>
</select>
<select className="md:my-4 my-2 border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
  <option disabled selected>Current Salary</option>
  <option>10k-40k</option>
  <option>41k-60k</option>
  <option>61k-higher</option>
</select>
<select className=" md:my-4  border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
  <option disabled selected>Expectation</option>
  <option>10k-40k</option>
  <option>41k-60k</option>
  <option>61k-higher</option>
</select>

</div>
{/* div 5 */}
<div>
<textarea type="text" placeholder='About me' className=" my-2 md:my-0 border block w-full h-48  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />

</div>

{/* education */}
<div className='flex mt-10 justify-between items-center'>
                   <h1 className='text-3xl uppercase'>Education</h1>
                   </div>
{/* div 1 */}
<div className='flex md:flex-row flex-col justify-between items-center md:gap-4 '>
                   <input type="text" placeholder='Institute' className="md:my-4 my-2  border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="text" placeholder='Degree' className="md:my-4  border md:w-1/2 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>
                   {/* div 2 */}
                   <div className='flex md:flex-row flex-col justify-between items-center md:gap-4 ' >
                   <input type="text" placeholder='Title' className="md:my-4 my-2 border md:w-1/2 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="date" placeholder='' className="md:my-4   border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>

{/* Experience */}
<div className='flex mt-10 justify-between items-center'>
                   <h1 className='text-3xl uppercase'>Experience</h1>
                   </div>
                   {/* div 1 */}
                   <div className='flex md:flex-row flex-col justify-between items-center md:gap-4 '>
                   <input type="text" placeholder='Company' className="md:my-4 my-2 border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="text" placeholder='Designation' className="md:my-4  border md:w-1/2 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>
                   {/* div 2 */}
                   <div className='flex md:flex-row flex-col justify-between items-center md:gap-4 '>
                   <input type="text" placeholder='Job from' className="md:my-4 my-2 border md:w-1/3 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="text" placeholder='End on' className="md:my-4  border md:w-1/3 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="text" placeholder='Location' className="md:my-4 my-2 border md:w-2/3 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>
                   {/* div 3 */}
                   <div>
<textarea type="text" placeholder='About company' className="  border block w-full h-48  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />

</div>
{/* Portfolio */}
<div className='flex mt-10 justify-between items-center'>
                   <h1 className='text-3xl uppercase'>Portfolio</h1>
                   </div>
                   {/* div 1 */}
                   <div className='flex md:flex-row flex-col justify-between items-center md:gap-4 ' >
                    <div className='md:flex-1' >
                    <input type="text" placeholder='Project name' className="md:my-4 w-full my-2  border  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                    {/* inner div */}
                    <div className='md:flex  md:flex-row md:justify-between md:items-center md:gap-4'>
                    <input type="date" placeholder='Start from' className="md:my-4 w-full  border  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                    <input type="date" placeholder='End on' className="md:my-4 w-full my-2  border  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                    </div>


                    </div>
                    <div className='md:flex-1'>
<textarea type="text" placeholder='Project description' className="  border block w-full h-32   border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />

</div>
                   </div>
                   {/* div 2 */}
                   <div>
   

    <input type="file" className="md:my-4 my-2  border w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
</div>

{/* save */}

<div className='flex mt-10 justify-between items-center'>
    <button className='bg-red-500 text-white font-bold p-3 w-full hover:bg-black'>Save</button>
</div>








                </div>

            </div>
        </div>

    );
};

export default Resume;