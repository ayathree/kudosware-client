
import { useLoaderData } from "react-router-dom";


const ResumeProfile = () => {
    const resumeProfile = useLoaderData();
   
    return (
        <div>
             <div className='md:m-10'>
                <div className='border-2 border-black md:p-7 p-2 my-10 md:my-0 '>
                   <div className='flex mt-5 justify-between items-center'>
                   <h1 className='text-3xl uppercase'>Personal Information</h1>
                  
                   </div>
<form  >
                     
                     {
                        resumeProfile.map((user)=>(<div key={user.id}>
                            <div  className='flex flex-col md:flex-row justify-between items-center md:gap-4 '>
                            <input type="text" placeholder='first name'  defaultValue={user.firstName}  className="md:my-4 my-2 w-full  border md:w-1/2 border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            <input type="text" placeholder='last email'  defaultValue={user.lastName} className="md:my-4 w-full  border md:w-1/2  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            </div>
                            
                            <div className='flex flex-col md:flex-row justify-between items-center md:gap-4 ' >
                            <input defaultValue={user.date}   type="date" placeholder='' className="md:my-4 my-2  border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            <input defaultValue={user.number}  type="number" placeholder='your number' className="md:my-4 border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            </div>
                            
                            <div className='flex flex-col md:flex-row justify-between items-center md:gap-4 '>
                            <input type="text" defaultValue={user.address}  placeholder='Address' className="md:my-4 my-2 w-full border md:w-1/2 border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            <input type="text" defaultValue={user.designation}  placeholder='Designation'  className="md:my-4 border md:w-1/2 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            </div>
                            
                            <div className='flex flex-col md:flex-row justify-between items-center md:gap-4'>
                            <select  className=" md:my-4 my-2 border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
           <option defaultValue={user.age} disabled selected>Age</option>
           <option value='20-25'>20-25</option>
           <option value='26-30'>26-30</option>
           <option value='30-35'>30-35</option>
         </select>
         <select  className=" md:my-4  border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
           <option defaultValue={user.gender} disabled selected>Gender</option>
           <option value='Male'>Male</option>
           <option value='Female'>Female</option>
           <option value='Other'>Other</option>
         </select>
         <select  className="md:my-4 my-2 border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
           <option defaultValue={user.salary} disabled selected>Current Salary</option>
           <option value='10k-40k'>10k-40k</option>
           <option value='41k-60k'>41k-60k</option>
           <option value='61k-higher'>61k-higher</option>
         </select>
         <select  className=" md:my-4  border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
           <option defaultValue={user.expectation} disabled selected>Expectation</option>
           <option value='10k-40k'>10k-40k</option>
           <option value='41k-60k'>41k-60k</option>
           <option value='61k-higher'>61k-higher</option>
         </select>
         
         </div>
        
         <div>
         <textarea  defaultValue={user.about} type="text" placeholder='About me' className=" my-2 md:my-0 border block w-full h-48  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
         
         </div>
         
        
         <div className='flex mt-10 justify-between items-center'>
                            <h1 className='text-3xl uppercase'>Education</h1>
                            </div>
       
         <div className='flex md:flex-row flex-col justify-between items-center md:gap-4 '>
                            <input type="text" defaultValue={user.institute}  placeholder='Institute' className="md:my-4 my-2  border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            <input type="text" defaultValue={user.degree} placeholder='Degree' className="md:my-4  border md:w-1/2 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            </div>
                           
                            <div className='flex md:flex-row flex-col justify-between items-center md:gap-4 ' >
                            <input type="text" defaultValue={user.title}   placeholder='Title' className="md:my-4 my-2 border md:w-1/2 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            <input type="date" defaultValue={user.date2}   placeholder='' className="md:my-4   border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            </div>
         
       
         <div className='flex mt-10 justify-between items-center'>
                            <h1 className='text-3xl uppercase'>Experience</h1>
                            </div>
                          
                            <div className='flex md:flex-row flex-col justify-between items-center md:gap-4 '>
                            <input type="text" defaultValue={user.company}  placeholder='Company' className="md:my-4 my-2 border md:w-1/2 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            <input type="text" defaultValue={user.designation2}  placeholder='Designation' className="md:my-4  border md:w-1/2 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            </div>
                           
                            <div className='flex md:flex-row flex-col justify-between items-center md:gap-4 '>
                            <input type="text" defaultValue={user.job}  placeholder='Job from' className="md:my-4 my-2 border md:w-1/3 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            <input type="text" defaultValue={user.end}  placeholder='End on' className="md:my-4  border md:w-1/3 w-full  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            <input type="text" defaultValue={user.location}  placeholder='Location' className="md:my-4 my-2 border md:w-2/3 w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            </div>
                           
                            <div>
         <textarea type="text" defaultValue={user.aboutCompany}  placeholder='About company' className="  border block w-full h-48  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
         
         </div>
        
         <div className='flex mt-10 justify-between items-center'>
                            <h1 className='text-3xl uppercase'>Portfolio</h1>
                            </div>
                          
                            <div  className='flex md:flex-row flex-col justify-between items-center md:gap-4 ' >
                             <div className='md:flex-1' >
                             <input type="text" defaultValue={user.project} placeholder='Project name'  className="md:my-4 w-full my-2  border  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            
                             <div className='md:flex  md:flex-row md:justify-between md:items-center md:gap-4'>
                             <input type="date" defaultValue={user.start} placeholder='Start from'  className="md:my-4 w-full  border  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                             <input type="date" defaultValue={user.finish} placeholder='End on'  className="md:my-4 w-full my-2  border  border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                             </div>
         
         
                             </div>
                             <div className='md:flex-1'>
         <textarea type="text" defaultValue={user.description} placeholder='Project description'  className="  border block w-full h-32   border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
         
         </div>
                            </div>
                          
                            <div>
            
         
             <input type="file" className="md:my-4 my-2  border w-full border-black bg-white px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
         </div>
                        </div>))
                     }



</form>







                </div>

            </div>
            
        </div>
    );
};

export default ResumeProfile;