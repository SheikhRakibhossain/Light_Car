import { FaMoneyBill, FaPeopleArrows, FaTools, FaTv } from "react-icons/fa";

const WhyChooesUs = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 bg-white border-2">
        <div>
          <img
            src="https://img.freepik.com/free-photo/worried-customer-talking-with-car-mechanic-auto-repair-shop_637285-7694.jpg?w=996&t=st=1695537757~exp=1695538357~hmac=af4ddb9960bcacf6704f1ae8aa1690a5e39cf1cdd3cdc55a862e13e2cd5e273e"
            alt="car maker image"
            className="fulid object-cover"
          />
        </div>
        <div className="bg-slate-600 md:p-20">
          <h2 className="text-3xl font-semi-bold text-center pb-4">
            <span className="text-white">Why</span> <span className="text-[#f22613]">Chooes Us?</span>
          </h2>
          <div className="grid grid-cols-2 gap-6 ">
            <div className="border">
              <div className="flex justify-center  gap-2 p-2">
                <span className="text-4xl text-white"><FaTv/></span>
                <div className="text-white">
                    <h2 className="text-xl font-semibold uppercase">BEST DIAGNOSTICS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fugit!</p>
                </div>
              </div>
            </div>
            <div className="border">
              <div className="flex justify-center  gap-2 p-3">
                <span className="text-4xl text-white"><FaTools/></span>
                <div className="text-white">
                    <h2 className="text-xl font-semibold uppercase">BEST MATERIALS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className="border">
              <div className="flex justify-center  gap-2 p-2">
                <span className="text-4xl text-white"><FaPeopleArrows/></span>
                <div className="text-white">
                    <h2 className="text-xl font-semibold uppercase">BEST PROFESSIONAL</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fugit!</p>
                </div>
              </div>
            </div>
            <div className="border">
              <div className="flex justify-center  gap-2 p-2">
                <span className="text-4xl text-white"><FaMoneyBill/></span>
                <div className="text-white">
                    <h2 className="text-xl font-semibold uppercase">LOW COST SERVICES</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fugit!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooesUs;
