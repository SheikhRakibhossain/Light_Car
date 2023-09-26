import {

    FaBoxOpen,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 py-2 px-3 bg-[#f22613]  text-white">
        <div className="flex justify-start items-center gap-4 ">
          <div className=" flex items-center gap-2">
            {" "}
            <span>
              <FaPhone />
            </span>{" "}
            (+88) 01637503636{" "}
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <span>
              <FaBoxOpen/>
            </span>
            rakib@gmail.com
          </div>
        </div>
        <div className="flex-none py-3 ">
          <ul className=" flex sm:content-center sm:justify-center  md:justify-end  items-center space-x-3">
            <li>
              <a>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a>
                <FaYoutube />
              </a>
            </li>
            <li>
              <a>
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>

    
    </>
  );
};

export default TopHeader;
