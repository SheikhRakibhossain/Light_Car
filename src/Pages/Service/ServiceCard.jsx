import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const ServiceCard = ({service}) => {

    const {title,img,price, _id} = service;
    // console.log(props.title)

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <img
          src={img}
          alt="Shoes"
          className='object-cover'
        />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text-orange-500 '>Price: ${price}</p>
        <div className="card-actions justify-between">
          <button className="btn btn-primary btn-sm">View More Info</button>
          <Link to={`checkout/${_id}`} className='bg-purple-400 d-flex justify-center items-center'> <span>Buy Now </span> <span><FaArrowRight/> </span></Link>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
