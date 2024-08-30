import { IoIosPeople } from 'react-icons/io';
import banner from '../assets/image/pbanner.png'
import woman from '../assets/image/women.png'
import { FaSearch } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';

const Home = () => {
    return (
        <div >
            {/* div 1 */}
            <div className="hero bg-base-200  border-b-8 border-red-500 rounded-bl-full">
  <div className="hero-content  ">
   
        <div className='flex flex-row justify-center items-center'>
        <div className='ml-44'>
        <h1 className='font-bold text-6xl'>Find Your Favorite 
            <br />
            <span className='text-red-500 text-4xl'>Job Immediate</span></h1>
            <p className='text-xl font-semibold mt-5 w-1/2  text-gray-500'>Find here your favorite job by searching, fill up your resume and find out the best job which is suitable for you.</p>
        </div>
        <img className='h-[420px] ' src={banner} alt="" />
        </div>
        

     
      
    
  </div>
</div>
{/* div 2 */}
        <div className='flex flex-row justify-start items-center gap-5 mt-36'>
            <div>
                <img className='w-[740px]' src={woman} alt="" />

            </div>
            <div>
                <h1 className='font-bold text-5xl'>Find Million Of Jobs And
                    <br />
                <span className='text-red-500 text-4xl'>Achieve Success</span></h1>
                <p className='font-semibold mt-4 w-3/4'>Job portal is the one of the best job searching site, where you can find out millions of job and also can find the best match job for you. So what are you waiting for? Find out your best match job now</p>
            </div>
        </div>
        {/* div 3 */}
        <h1 className='text-5xl font-bold text-center mt-36'>Our Job <span className='text-red-500'>Process</span></h1>
        <div className='flex flex-row justify-center items-center mt-16'>
            <div className='border border-white w-full h-[220px] p-10 hover:shadow-2xl'>
           <div className='flex justify-center items-center'>
           <IoIosPeople className='text-4xl' />
           </div>
            <h1 className='text-red-500 text-2xl font-bold text-center'>Create Account</h1>
            <p className='text-center'>Create an account for you for get the access of job search</p>

            </div>
            <div className='border border-white w-full h-[220px] p-10 hover:shadow-2xl'>
           <div className='flex justify-center items-center'>
           <FaSearch className='text-3xl' />
           </div>
            <h1 className='text-red-500 text-2xl font-bold text-center'>Search Job</h1>
            <p className='text-center'>Search job according to your profile.</p>
           

            </div>
            <div className='border border-white w-full h-[220px] p-10 hover:shadow-2xl'>
           <div className='flex justify-center items-center'>
           <IoDocumentText className='text-3xl' />
           </div>
            <h1 className='text-red-500 text-2xl font-bold text-center'>Upload Resume</h1>
            <p className='text-center'>Upload your resume for recruiter to know your profile well.</p>

            </div>
            

        </div>
        {/* div 4 */}
        </div>
    );
};

export default Home;