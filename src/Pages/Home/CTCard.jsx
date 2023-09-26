const CTCard = ({ pro }) => {
  const { title, image, price, details, date, repairBy } = pro;
  return (
    <>
      <div className="card shadow-xl ">
        <figure>
          <img src={image} alt="service" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            
          </h2>
          <div className="flex flex-col items-start space-y-2">
            {/* <p>{serviceName}</p> */}
            <p className="text-[#ff0000] text-xl">Price: ${price}</p>
            <p>Details: {details}</p>
            <p className="font-bold">Repair By: {repairBy}</p>
          </div>

          <div className="flex justify-between">
            <button className="bg-slate-300 py-2 px-4">{date}th</button>
            <button className="bg-slate-300 py-2 px-4">Case Studies </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTCard;
