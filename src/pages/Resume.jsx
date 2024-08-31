
import { Link } from 'react-router-dom';
import resume from '../assets/image/resume profile.png'
import { AuthContext } from '../routes/AuthProvider';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Resume = () => {
  const {user} = useContext(AuthContext);

  const handleForm=e=>{
    e.preventDefault();
    const form=e.target;
    const email=user.email;
    const firstName=form.first.value;
    const lastName=form.last.value;
    const date =form.date.value;
    const number = form.number.value;
    const address = form.address.value;
    const designation = form.designation.value;
    const age = form.age.value;
    const gender= form.gender.value;
    const salary= form.salary.value;
    const expectation= form.expectation.value;
    const about = form.about.value;
    const institute= form.institute.value;
    const degree = form.degree.value;
    const title = form.title.value;
    const date2= form.date2.value;
    const company=form.company.value;
    const designation2=form.designation2.value;
    const job=form.job.value;
    const end=form.end.value;
    const aboutCompany=form.aboutCompany.value;
    const location=form.location.value;
    const project=form.project.value;
    const start=form.start.value;
    const finish=form.finish.value;
    const description=form.description.value;
    const file=form.file.value;
    const resume={email,firstName,lastName,date,number,address,designation,age,gender,salary,expectation,about,institute,degree,title,date2,company,designation2,job,end,aboutCompany,location,project,start,finish,description,file}
    console.log(resume)

    fetch('https://kudosware-server.vercel.app/resume',{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(resume)
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data);
      if (data.insertedId) {
        toast.success('Successfully saved');
           
         e.target.reset();
          
      }
  })
  .catch((error) => {
    
    toast.error('Saving fail');
    console.error(error);
});


  }

  

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
                   <div className='flex mt-5 justify-between items-center'>
                   <h1 className='text-3xl uppercase'>Personal Information</h1>
                  
                   </div>
<form onSubmit={handleForm} >
                     {/* personal info div */}
                     <div className='flex flex-col md:flex-row justify-between items-center md:gap-4 '>
                   <input type="text" placeholder='first name' name='first'  className="md:my-4 my-2 w-full  border md:w-1/2 border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="text" placeholder='last email' name='last'  className="md:my-4 w-full  border md:w-1/2  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>
                   {/* div 2 */}
                   <div className='flex flex-col md:flex-row justify-between items-center md:gap-4 ' >
                   <input name='date'  type="date" placeholder='' className="md:my-4 my-2  border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input name='number'  type="number" placeholder='your number' className="md:my-4 border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>
                   {/* div 3 */}
                   <div className='flex flex-col md:flex-row justify-between items-center md:gap-4 '>
                   <input type="text" name='address' placeholder='Address' className="md:my-4 my-2 w-full border md:w-1/2 border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="text" name='designation' placeholder='Designation'  className="md:my-4 border md:w-1/2 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>
                   {/* div 4 */}
                   <div className='flex flex-col md:flex-row justify-between items-center md:gap-4'>
                   <select name='age' className=" md:my-4 my-2 border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
  <option disabled selected>Age</option>
  <option value='20-25'>20-25</option>
  <option value='26-30'>26-30</option>
  <option value='30-35'>30-35</option>
</select>
<select name='gender' className=" md:my-4  border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
  <option disabled selected>Gender</option>
  <option value='Male'>Male</option>
  <option value='Female'>Female</option>
  <option value='Other'>Other</option>
</select>
<select name='salary' className="md:my-4 my-2 border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
  <option disabled selected>Current Salary</option>
  <option value='10k-40k'>10k-40k</option>
  <option value='41k-60k'>41k-60k</option>
  <option value='61k-higher'>61k-higher</option>
</select>
<select name='expectation' className=" md:my-4  border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
  <option disabled selected>Expectation</option>
  <option value='10k-40k'>10k-40k</option>
  <option value='41k-60k'>41k-60k</option>
  <option value='61k-higher'>61k-higher</option>
</select>

</div>
{/* div 5 */}
<div>
<textarea name='about' type="text" placeholder='About me' className=" my-2 md:my-0 border block w-full h-48  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />

</div>

{/* education */}
<div className='flex mt-10 justify-between items-center'>
                   <h1 className='text-3xl uppercase'>Education</h1>
                   </div>
{/* div 1 */}
<div className='flex md:flex-row flex-col justify-between items-center md:gap-4 '>
                   <input type="text" name='institute' placeholder='Institute' className="md:my-4 my-2  border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="text" name='degree' placeholder='Degree' className="md:my-4  border md:w-1/2 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>
                   {/* div 2 */}
                   <div className='flex md:flex-row flex-col justify-between items-center md:gap-4 ' >
                   <input type="text"  name='title' placeholder='Title' className="md:my-4 my-2 border md:w-1/2 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="date"  name='date2' placeholder='' className="md:my-4   border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>

{/* Experience */}
<div className='flex mt-10 justify-between items-center'>
                   <h1 className='text-3xl uppercase'>Experience</h1>
                   </div>
                   {/* div 1 */}
                   <div className='flex md:flex-row flex-col justify-between items-center md:gap-4 '>
                   <input type="text" name='company' placeholder='Company' className="md:my-4 my-2 border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="text" name='designation2' placeholder='Designation' className="md:my-4  border md:w-1/2 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>
                   {/* div 2 */}
                   <div className='flex md:flex-row flex-col justify-between items-center md:gap-4 '>
                   <input type="text" name='job' placeholder='Job from' className="md:my-4 my-2 border md:w-1/3 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="text" name='end' placeholder='End on' className="md:my-4  border md:w-1/3 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   <input type="text" name='location' placeholder='Location' className="md:my-4 my-2 border md:w-2/3 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                   </div>
                   {/* div 3 */}
                   <div>
<textarea type="text" name='aboutCompany' placeholder='About company' className="  border block w-full h-48  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />

</div>
{/* Portfolio */}
<div className='flex mt-10 justify-between items-center'>
                   <h1 className='text-3xl uppercase'>Portfolio</h1>
                   </div>
                   {/* div 1 */}
                   <div  className='flex md:flex-row flex-col justify-between items-center md:gap-4 ' >
                    <div className='md:flex-1' >
                    <input type="text" placeholder='Project name' name='project' className="md:my-4 w-full my-2  border  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                    {/* inner div */}
                    <div className='md:flex  md:flex-row md:justify-between md:items-center md:gap-4'>
                    <input type="date" placeholder='Start from' name='start' className="md:my-4 w-full  border  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                    <input type="date" placeholder='End on' name='finish' className="md:my-4 w-full my-2  border  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                    </div>


                    </div>
                    <div className='md:flex-1'>
<textarea type="text" placeholder='Project description' name='description' className="  border block w-full h-32   border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />

</div>
                   </div>
                   {/* div 2 */}
                   <div>
   

    <input type="file" name='file' className="md:my-4 my-2  border w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
</div>

{/* save */}

<div className='flex mt-10 justify-between items-center'>
    <button className='bg-red-500 text-white font-bold p-3 w-full hover:bg-black'>Save</button>
</div>

</form>







                </div>

            </div>
            <div className='flex justify-center items-center mb-20'>
            <Link to={`/resumeProfile/${user.email}`}> <button className='btn bg-red-500 text-white font-bold  md:text-2xl hover:bg-black'> Checkout Submission</button></Link>
            </div>
            <Toaster/>
        </div>

    );
};

export default Resume;