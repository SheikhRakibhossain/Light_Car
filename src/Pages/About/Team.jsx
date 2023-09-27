import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./style.css";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Team = () => {

  return (
    <>
      <div className="py-10 text-center ">
        <h2 className="text-3xl font-semibold text-center">Our<span className="text-[#f22613]"> Team Members</span></h2>
        <span className="w-20 h-2 border bg-red-400 border-red-400 text-center"></span>
    </div>
      <div className=" mx-auto p-4 grid md:grid-cols-4 gap-4">
        {/* team member 1st */}
        <div>

        <div className="relative group overflow-hidden">
          {/* Card container */}
          <div className="bg-white border rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://img.freepik.com/free-photo/young-mechanic-working-his-workshop_23-2148970733.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais"
              alt="car maker"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Social media icons container */}
          <div className="absolute bottom-0 left-0 w-full bg-[#0000006f]  py-2 px-4 flex justify-center space-x-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[30px] ">
            <a
              href="#"
              className="hover:text-[#1877f2] text-blue-400 border p-2"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-[#1da1f2] text-blue-300 border p-2"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-[#c32aa3] text-pink-200 border p-2"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[#0a66c2] text-blue-300 border p-2"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className=" border flex flex-col justify-center items-center space-y-3 pb-2">
          <h2 className="text-xl font-semibold mb-2">Robert Collins</h2>
          <span className=" bg-slate-600 text-white py-1 px-5 rounded-full">Manager Of SRM</span>
       {/* rating */}
       <Rating
      style={{ maxWidth: 200, text:"center",}}
      value={5}
      className="star"
      spaceBetween="small"
      spaceInside="medium"
      readOnly
    />
       
        </div>
        </div>
        {/* team member 2nd */}
        <div>

        <div className="relative group overflow-hidden">
          {/* Card container */}
          <div className="bg-white border rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://img.freepik.com/free-photo/front-view-female-welder-posing-work_23-2148813369.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais"
              alt="car maker"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Social media icons container */}
          <div className="absolute bottom-0 left-0 w-full bg-[#0000006f]  py-2 px-4 flex justify-center space-x-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[30px] ">
            <a
              href="#"
              className="hover:text-[#1877f2] text-blue-400 border p-2"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-[#1da1f2] text-blue-300 border p-2"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-[#c32aa3] text-pink-200 border p-2"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[#0a66c2] text-blue-300 border p-2"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className=" border flex flex-col justify-center items-center space-y-3 pb-2">
          <h2 className="text-xl font-semibold mb-2">Sophia Enna</h2>
          <span className=" bg-slate-600 text-white py-1 px-5 rounded-full">Color Designer</span>
       {/* rating */}
       <Rating
      style={{ maxWidth: 200, text:"center",}}
      value={5}
      className="star"
      spaceBetween="small"
      spaceInside="medium"
      readOnly
    />
       
        </div>
        </div>
        {/* team member 3rd */}
        <div>

        <div className="relative group overflow-hidden">
          {/* Card container */}
          <div className="bg-white border rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://img.freepik.com/free-photo/technician-writing-clipboard-workshop_23-2147897931.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais"
              alt="car maker"
              className="w-full h-full object-cover"

            />
          </div>
          {/* Social media icons container */}
          <div className="absolute bottom-0 left-0 w-full bg-[#0000006f]  py-2 px-4 flex justify-center space-x-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[30px] ">
            <a
              href="#"
              className="hover:text-[#1877f2] text-blue-400 border p-2"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-[#1da1f2] text-blue-300 border p-2"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-[#c32aa3] text-pink-200 border p-2"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[#0a66c2] text-blue-300 border p-2"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className=" border flex flex-col justify-center items-center space-y-3 pb-2">
          <h2 className="text-xl font-semibold mb-2">Phillps Mopps</h2>
          <span className=" bg-slate-600 text-white py-1 px-5 rounded-full">Electrical Engineer</span>
       {/* rating */}
       <Rating
      style={{ maxWidth: 200, text:"center",}}
      value={5}
      className="star"
      spaceBetween="small"
      spaceInside="medium"
      readOnly
    />
       
        </div>
        </div>
        {/* team member 4th */}
        <div>

        <div className="relative group overflow-hidden">
          {/* Card container */}
          <div className="bg-white border rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://img.freepik.com/free-photo/man-checking-out-new-car_23-2148130138.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais"
              alt="car maker"
              className="w-full h-full object-cover"

            />
          </div>
          {/* Social media icons container */}
          <div className="absolute bottom-0 left-0 w-full bg-[#0000006f]  py-2 px-4 flex justify-center space-x-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[30px] ">
            <a
              href="#"
              className="hover:text-[#1877f2] text-blue-400 border p-2"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-[#1da1f2] text-blue-300 border p-2"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-[#c32aa3] text-pink-200 border p-2"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[#0a66c2] text-blue-300 border p-2"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className=" border flex flex-col justify-center items-center space-y-3 pb-2">
          <h2 className="text-xl font-semibold mb-2">Jhon Smiths</h2>
          <span className=" bg-slate-600 text-white py-1 px-5 rounded-full">Body Expert</span>
       {/* rating */}
       <Rating
      style={{ maxWidth: 200, text:"center",}}
      value={5}
      className="star"
      spaceBetween="small"
      spaceInside="medium"
      readOnly
    />
       
        </div>
        </div>
      </div>
    </>
  );
};

export default Team;
