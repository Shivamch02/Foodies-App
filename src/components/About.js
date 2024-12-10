import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import food from "../../public/assets/shahipaneer.jpeg"
const About = () => {
    const [show, setshow] = useState(false) ;
    return (
       <div className="mx-36 about-container-main">
            <div className=" m-6 font-bold flex justify-center about-profile-container">
                <div>
                {
                    show ? (
                        <>
                            <Link to={"/about"}>
                                <button
                                className="bg-yellow-400 rounded-sm font-bold p-2 ml-[500px] about-profile-button hover:bg-yellow-500"
                                onClick={()=> setshow(false)}
                                >
                                    Hide my Profile
                                </button>
                            </Link>
                            <Outlet/>
                        </>
                    ) : (
                        <Link to={"profile"}>
                            <button
                            className="bg-yellow-400 rounded-sm p-2 about-profile-button  hover:bg-yellow-500"
                            onClick={()=> setshow(true)}
                            >
                                Show my profile
                            </button>
                        </Link>
                    )
                }
                </div>
            </div>
            <div className="flex justify-between mt-10 body about-body about-container">
                <div className="text-6xl font-bold my-10 mt-28 about-left">
                    <h1 className="text-gray-600 my-2  max-w-7xl">Welcome to <br/>the World of<br/>
                    </h1>
                    <h1 className="bg-green-800 rounded-xl p-2 my-2 text-white font-bold ">Tasty and Fresh Food</h1>
                    <h4 className="font-bold text-2xl my-6 text-gray-600">
                        "Better you will feel if you eat a Eats<span className="text-yellow-600">Easy</span> healthy
                        meal"
                    </h4>
                </div>
                <div className="about-right">
                    <img  className="max-w-lg" src={food} alt="Food Image"/>
                </div>

            </div>
       </div>
    );
};
export default About;