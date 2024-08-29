import resume from '../assets/image/resume profile.png'

const Resume = () => {
    return (
        <div className='mt-5'>
            <div className='flex justify-between items-center'>
            <h1 className="text-5xl font-bold">Your dream Job
                <br />
                 <span className="text-3xl text-red-500" >Is Near to You</span></h1>
            <img className='rounded-l-full' src={resume} alt="" />
            </div>
            {/* resume */}
            <div className='m-10'>
                <div className='border-2 border-black p-2 '>
                   <div className='flex justify-between items-center'>
                   <h1 className='text-3xl'>Personal Information</h1>
                   <button className='bg-red-500 p-2 text-white rounded-md'>Upload Your CV</button>
                   </div>
                   {/* personal info div */}
                   <div></div>
                   <div></div>
                   <div></div>


                </div>

            </div>
        </div>

    );
};

export default Resume;