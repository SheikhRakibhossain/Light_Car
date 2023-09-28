import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const ServiceCard = ({service}) => {

    const {title,img,price, _id} = service;
    // console.log(props.title)

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-none ">
        <img
          src={img}
          alt="Shoes"
          className='object-cover'
        />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text-[#f22613] '>Price: ${price}</p>
        <div className="card-actions justify-between">
          <button className="btn btn-primary btn-sm">View More Info</button>
          <Link to={`checkout/${_id}`} className='bg-[#f22613] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 '> <span >Buy Now </span> <FaArrowRight/> </Link>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
