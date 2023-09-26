import Marquee from "react-fast-marquee";
import images from './Logo' 

const Brands = () => {

    // console.log(images)
  return (
    <div className="bg-[#ebebebd4] px-10 py-10">
      <div className="pt-10 pb-5">
        <h2 className="text-3xl font-semibold text-center">
          Our Services <span className="text-[#f22613]">Brand !</span>
        </h2>
      </div>
      <Marquee speed={150}>
       
      {
        images.map(image=><img key={image} src={image} alt="car logo" className="w-[150px] p-4 " />  )
      }
      </Marquee>
    </div>
  );
};

export default Brands;
