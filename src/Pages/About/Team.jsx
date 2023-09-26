// import { FaFacebook, FaTwitter } from 'react-icons/fa';
import "./style.css";

const Team = () => {
//   const socialMediaIcons = [
//     {
//       name: "Twitter",
//       icon: (
//        <FaFacebook/>
//       ),
//       link: "https://twitter.com/",
//     },
//     {
//       name: "Instagram",
//       icon: (
//         <FaTwitter/>
//       ),
//       link: "https://www.instagram.com/example",
//     },
//     {
//       name: "Instagram",
//       icon: (
//         <FaTwitter/>
//       ),
//       link: "https://www.instagram.com/example",
//     },
//     {
//       name: "Instagram",
//       icon: (
//         <FaTwitter/>
//       ),
//       link: "https://www.instagram.com/example",
//     },
//     {
//       name: "Instagram",
//       icon: (
//         <FaTwitter/>
//       ),
//       link: "https://www.instagram.com/example",
//     }
//     // Add more social media icons as needed
//   ];

const socialMediaIcons =[

    {
        icon:"hi",
        link: "a"
    },
    {
        icon:"hi",
        link: "a"
    },
    {
        icon:"hi",
        link: "a"
    },
    {
        icon:"hi",
        link: "a"
    },
    {
        icon:"hi",
        link: "a"
    },
    {
        icon:"hi",
        link: "a"
    },
]


return (
    <>
      <div className="max-w-sm mx-auto p-4">
        <div className="relative group">
          {/* Card container */}
          <div className="bg-white border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">User Name</h2>
            <p className="text-gray-600">Description of the user.</p>
          </div>
          {/* Social media icons container (hidden by default) */}
          <div className="absolute bottom-0  hidden group-hover:block p-2 space-x-2 bg-white transform -translate-y-0 transition-transform duration-5000 ease-out hover:ease-in">
            {socialMediaIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 "
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
