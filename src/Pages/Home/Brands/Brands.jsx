import Marquee from "react-fast-marquee";
import images from './Logo';
import './brandStyle.css'

const Brands = () => {

    // console.log(images)
  return (
    <div className="bg-[#ebebebd4] px-10 py-10">
      <div className="pt-10 pb-5">
        <h2 className="text-3xl font-semibold text-center">
          Our Services <span className="text-[#f22613]">Brand !</span>
        </h2>
      </div>
      <Marquee speed={150} className="border-red-500">
       
      {
        images.map(image=><div  key={image} className="border-gray-500 p-4"><img src={image} alt="car logo" className="w-[100px] p-4 border-gray-950" /></div>  )
      }
      </Marquee>
    </div>
  );
};

export default Brands;
