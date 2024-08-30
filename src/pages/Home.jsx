import banner from '../assets/image/pbanner.png'
import woman from '../assets/image/women.png'

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
        
        </div>
    );
};

export default Home;