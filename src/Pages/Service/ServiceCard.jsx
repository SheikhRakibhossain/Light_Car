import { FaArrowRight } from 'react-icons/fa';



const ServiceCard = ({service}) => {

    const {title,img,price} = service;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className='object-cover h-48 w-96'
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text-orange-500 '>Price: ${price}</p>
        <div className="card-actions justify-between">
          <button className="btn btn-primary btn-sm">Buy Now</button>
          <FaArrowRight className='font-xl text-orange-500'/>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
