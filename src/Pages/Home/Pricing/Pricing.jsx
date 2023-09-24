import './Pricing.css'
const Pricing = () => {
  return (
    <div className='relative'>
      <div className=" bg-fixed overlay bg-[url('https://img.freepik.com/free-photo/portrait-mechanic-wiping-hands-with-cleaning-cloth_1170-1137.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais')]">
        <div className='grid md:grid-cols-2 justify-items-center content-center p-8 lg:p-16  gap-6 '>
            <div className='grid grid-flow-col md:grid-cols-2 border p-6 z-10 cardbg gap-4'>
                    <div className='text-white'>
                        <h1 className='text-2xl uppercase leading-10 pb-3'>BRAKE REPAIR</h1>
                        <h2 className='text-6xl '>$90</h2>
                    </div>
                    <div className='text-white leading-8'>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <button className='btn btn-accent btn-sm mt-4' type="button">Book Now</button>
                    </div>
            </div>
            <div className='grid md:grid-cols-2 border p-6 z-10 cardbg gap-4'>
                    <div className='text-white'>
                        <h1 className='text-2xl uppercase leading-10 pb-3'>ENGINE DIOGNOSTIC</h1>
                        <h2 className='text-6xl '>$130</h2>
                    </div>
                    <div className='text-white leading-8'>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <button className='btn btn-accent btn-sm mt-4' type="button">Book Now</button>
                    </div>
            </div>
            <div className='grid md:grid-cols-2 border p-6 z-10 cardbg gap-4'>
                    <div className='text-white'>
                        <h1 className='text-2xl uppercase leading-10 pb-3'>OIL CHANGING</h1>
                        <h2 className='text-6xl '>$80</h2>
                    </div>
                    <div className='text-white leading-8'>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <button className='btn btn-accent btn-sm mt-4' type="button">Book Now</button>
                    </div>
            </div>
            <div className='grid md:grid-cols-2 border p-6 z-10 cardbg gap-4'>
                    <div className='text-white'>
                        <h1 className='text-2xl uppercase leading-10 pb-3'>BODY PAINTING</h1>
                        <h2 className='text-6xl '>$100</h2>
                    </div>
                    <div className='text-white leading-8'>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <p>1. Lorem ipsum, dolor sit amet consectetur  </p>
                        <button className='btn btn-accent btn-sm mt-4' type="button">Book Now</button>
                    </div>
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default Pricing;
