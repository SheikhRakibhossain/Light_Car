import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./style.css";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Team = () => {

  return (
    <>
      <div className=" mx-auto p-4 grid md:grid-cols-4 gap-4">
        {/* team member 1st */}
        <div>

        <div className="relative group overflow-hidden">
          {/* Card container */}
          <div className="bg-white border rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://img.freepik.com/free-photo/young-mechanic-working-his-workshop_23-2148970733.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais"
              alt="car maker"
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
          <h2 className="text-xl font-semibold mb-2">Robert Hearter</h2>
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
        {/* team member 2nd */}
        <div>

        <div className="relative group overflow-hidden">
          {/* Card container */}
          <div className="bg-white border rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://img.freepik.com/free-photo/young-mechanic-working-his-workshop_23-2148970733.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais"
              alt="car maker"
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
          <h2 className="text-xl font-semibold mb-2">Robert Hearter</h2>
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
              src="https://img.freepik.com/free-photo/young-mechanic-working-his-workshop_23-2148970733.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais"
              alt="car maker"
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
          <h2 className="text-xl font-semibold mb-2">Robert Hearter</h2>
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
        {/* team member 4th */}
        <div>

        <div className="relative group overflow-hidden">
          {/* Card container */}
          <div className="bg-white border rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://img.freepik.com/free-photo/young-mechanic-working-his-workshop_23-2148970733.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais"
              alt="car maker"
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
          <h2 className="text-xl font-semibold mb-2">Robert Hearter</h2>
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
      </div>
    </>
  );
};

export default Team;
