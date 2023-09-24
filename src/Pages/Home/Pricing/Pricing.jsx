import './Pricing.css'
const Pricing = () => {
  return (
    <div>
      <div className=" overlay bg-[url('https://img.freepik.com/free-photo/portrait-mechanic-wiping-hands-with-cleaning-cloth_1170-1137.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais')]">
        <div className='grid md:grid-cols-2 justify-items-center content-center  p-10 gap-6 '>
            <div className='grid md:grid-cols-2 border p-6 z-10 cardbg gap-4'>
                    <div className='text-white'>
                        <h1 className='text-2xl uppercase leading-10 pb-3'>ENGINE DIOGNOSTIC</h1>
                        <h2 className='text-6xl '>$30</h2>
                    </div>
                    <div className='text-white leading-8'>
                        <p>1. Lorem ipsum dolor sit amet.</p>
                        <p>2. Lorem ipsum dolor sit amet.</p>
                        <p>3. Lorem ipsum dolor sit amet.</p>
                        <p>3. Lorem ipsum dolor sit amet.</p>
                        <button className='btn btn-secondary btn-sm mt-4' type="button">Book Now</button>
                    </div>

            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
