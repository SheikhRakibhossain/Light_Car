const CTCard = ({pro}) => {
    const {title, image, price, serviceName, details, date, repairBy} = pro;
  return (
    <>
      <div className="card bg-base-100 shadow-xl ">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{title}</div>
          </h2>
          <p>{serviceName}</p>
          <p>{price}</p>
          <p>{details}</p>
          <p>{repairBy}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{date}</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTCard;
