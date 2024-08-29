import banner from '../assets/image/pbanner.png'

const Home = () => {
    return (
        <div >
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
        
        </div>
    );
};

export default Home;