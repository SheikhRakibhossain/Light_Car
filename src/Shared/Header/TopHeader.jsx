import {

    FaBoxOpen,
  FaCartArrowDown,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <>
      <div className="navbar bg-[#f22613] text-white">
        <div className="flex-1 gap-4">
          <div className="flex justify-center gap-2 items-center">
            {" "}
            <span>
              <FaPhone />
            </span>{" "}
            +8801637503636{" "}
          </div>
          <div className="flex  justify-center gap-2 items-center">
            {" "}
            <span>
              <FaBoxOpen/>
            </span>
            rakib@gmail.com
          </div>
          <div className="flex  justify-center gap-2 items-center">
            <span>
              <FaLocationArrow />
            </span>
            Dhaka, 12/2 street:7
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
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
            <div className="flex ">
              <li>
                <a>
                  <FaCartArrowDown />
                </a>
              </li>
              <li>
                <a>
                  <FaSearch />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
