import { IoSearch } from "react-icons/io5";
import { FaMarker } from "react-icons/fa";
import { FaFileVideo } from "react-icons/fa6";
import { SiGooglemarketingplatform } from "react-icons/si";
import { IoLogoDesignernews } from "react-icons/io5";
import { MdOutlineAppRegistration } from "react-icons/md";

export const Service = () => {

    return (<>

        <div className="py-10 md:py-20">
            <div className=" container mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">Our Services</h2>
                    <p className="text-lg text-neutral-content mt-2">We provide the best services for our customers</p>
                </div>
            </div>
        </div>




        <div className="grid md:grid-cols-3 gap-10 container   mx-auto">
            <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:translate-y-2 text-base-content shadow-lg border-rounded">
                <div className="card-body items-center text-center gap-4">
                    <IoSearch className="text-3xl" />
                    <h2> E-Commerce Marketing</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi architecto nam.
                    </p>
                </div>
            </div>  



            <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:translate-y-2 text-base-content shadow-lg border-rounded">
                <div className="card-body items-center text-center gap-4">
                    <FaMarker className="text-3xl" />
                    <h2> Shopify Marketing</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi architecto nam.
                    </p>
                </div>
            </div>  



            <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:translate-y-2 text-base-content shadow-lg border-rounded">
                <div className="card-body items-center text-center gap-4">
                    <FaFileVideo className="text-3xl" />
                    <h2> Video Templates Editing</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi architecto nam.
                    </p>
                </div>
            </div>  



            <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:translate-y-2 text-base-content shadow-lg border-rounded">
                <div className="card-body items-center text-center gap-4">
                    <SiGooglemarketingplatform className="text-3xl" />
                    <h2>Personal Budget Management </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi architecto nam.
                    </p>
                </div>
            </div>  



            <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:translate-y-2 text-base-content shadow-lg border-rounded">
                <div className="card-body items-center text-center gap-4">
                    <IoLogoDesignernews className="text-3xl" />
                    <h2> Industrial & Product Design</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi architecto nam.
                    </p>
                </div>
            </div>  




            <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:translate-y-2 text-base-content shadow-lg border-rounded">
                <div className="card-body items-center text-center gap-4">
                    <MdOutlineAppRegistration className="text-3xl" />
                    <h2> Business Formation & Registration </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi architecto nam.
                    </p>
                    <hr />
                </div>
            </div>  
        </div>


     
    </>)
}