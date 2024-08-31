import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Profile = () => {
    const profile = useLoaderData();
    
    const[users]= useState(profile);
    console.log(users)
    return (
        <div className="mt-36">
            {
                users.map(user=><div key={user.id}>
                    <h1 className="text-center font-bold text-xl md:text-5xl mb-5 ">Name :<span className="text-red-500">{user.name}</span></h1>
                    <h1 className="text-center font-bold text-xl md:text-5xl mb-5 ">Email :<span className="text-red-500">{user.email}</span></h1>
                    <h1 className="text-center font-bold text-xl md:text-5xl mb-5 ">Designation :<span className="text-red-500">{user.role}</span></h1>
                    <h1 className="text-center font-bold text-xl md:text-5xl mb-20 ">Gender :<span className="text-red-500">{user.gender}</span></h1>
                    
                </div>)
            }
           

            


        </div>
    );
};

export default Profile;