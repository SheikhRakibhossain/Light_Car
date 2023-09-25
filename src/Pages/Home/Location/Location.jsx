import {   FaPiedPiperSquare,} from 'react-icons/fa';

const Location = () => {

    const subscribe = e =>{
        e.preventDefault();
        
        const email = e.target.email.value;
        console.log(email)
    }
  return (
    <>
     <div className="pt-10 ">
        <h2 className="text-3xl font-semibold text-center">Find On <span className="text-[#f22613]">Us Here !</span></h2>
    </div>
      <section className='grid md:grid-cols-2 gap-4 px-4 py-10'>
     
        <div>
            <div className='md:px-10 space-y-5'>
                <p className='text-6xl '><FaPiedPiperSquare/></p>
                <h2 className='text-2xl'>Do you want to get update with us ? please Subscribe to our Newsletter</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure vitae magnam nulla odit dicta quas maxime, natus ipsum esse?</p>
            
            <form onSubmit={subscribe}>

            <input type="email" placeholder="Email" className="input border border-purple-300 py-3 input-info w-full max-w-xs rounded-none " required /><input className='border border-warning px-6 py-3 bg-rose-600 cursor-pointer text-white' type="submit" value="Subscribe" />
            </form>
            </div>
            
        </div>
        <div className='w-full'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.354951827911!2d90.25721207487702!3d23.91248188253557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e9dec326c4cd%3A0xe3e8a8e36a0fee50!2sNabinagar%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1695644675388!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className=' w-full md:w-[700px] h-[380px] '
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Location;
