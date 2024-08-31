import { Link, } from 'react-router-dom';
import banner from '../assets/image/singup banner.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../routes/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  
  const [errorRegister, setErrorRegister] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    const gender = form.gender.value;
    const signUpMember = { name, email, password, role, gender };

    setErrorRegister('');

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        return fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(signUpMember),
        });
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.insertedId) {
            toast.success('Successfully signed up');
           
            e.target.reset();
        }
    })
    .catch((error) => {
        setErrorRegister(error.message);
        toast.error('Sign up failed.');
        console.error(error);
    });
};

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold">
          Your dream Job
          <br />
          <span className="text-3xl text-red-500">Is Near to You</span>
        </h1>
        <img className="hidden lg:block" src={banner} alt="" />
      </div>
      {/* form */}
      <div className="mt-20 mb-5 text-center text-4xl font-bold">
        <h1 className="uppercase">Registration</h1>
      </div>
      <form onSubmit={handleSignUp}>
        <div className="flex justify-center items-center mb-5">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="mt-2 rounded-lg border lg:w-1/2 w-full border-black bg-white px-5 py-2.5 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            required
          />
        </div>
        <div className="flex justify-center items-center mb-5">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="mt-2 rounded-lg border lg:w-1/2 w-full border-black bg-white px-5 py-2.5 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            required
          />
        </div>
        <div className="flex justify-center items-center mb-2">
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="mt-2 rounded-lg border lg:w-1/2 w-full border-black bg-white px-5 py-2.5 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            required
          />
        </div>
        {errorRegister && <p className="text-red-600 flex justify-center items-center">{errorRegister}</p>}
        <div className="flex justify-center items-center mb-5">
          <select
            name="role"
            className="select select-bordered mt-2 rounded-lg border lg:w-1/2 w-full border-black bg-white px-5 py-2.5 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            required
          >
            <option value="">Your Role</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Fresher">Fresher</option>
          </select>
        </div>
        <div className="flex justify-center items-center mb-5">
          <select
            name="gender"
            className="select select-bordered mt-2 rounded-lg border lg:w-1/2 w-full border-black bg-white px-5 py-2.5 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            required
          >
            <option value="">Your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex justify-center items-center mb-5">
          <button className="mt-2 rounded-lg border lg:w-1/2 w-full bg-red-500 text-white px-5 py-2.5 hover:bg-black">
            Register
          </button>
        </div>
      </form>

      {/* login */}
      <div className="lg:m-20 my-20 text-center">
        <h1>
          Already Have An Account?{' '}
          <Link to={'/login'}>
            <span className="font-bold">Log in here</span>
          </Link>
        </h1>
      </div>

      <Toaster />
    </div>
  );
};

export default SignUp;
