import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import Service from './../Service/Service';

const Checkout = () => {
  const service = useLoaderData();
  console.log(service);
  const { title, service_id, img, price } = service;
  const { user } = useContext(AuthContext);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const message = form.message.value;
    const order = {
      name,
      email,
      date,
      message,
      price: price,
      img: img,
      serviceNumber: service_id,
      service_name: title,
    };
    console.log(order);

    fetch('http://localhost:5000/checkout',{

        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res =>res.json())
    .then(data =>{
        if(data.insertedId){
            alert("Order has been done and we will let you update in your email")
        }
        console.log(data)
    })
    .catch(error =>console.log(error))

  };

  return (
    <>
      <h1>I am checkout page</h1>
      <p>Service length: {title}</p>

      {/* input file here */}
      <form onSubmit={handleOrder} className="min-h-screen">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Write your name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">My Service</span>
            </label>
            <input
              type="text"
              name="service"
              placeholder="Service"
              defaultValue={title}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Number</span>
            </label>
            <input
              type="number"
              defaultValue={service_id}
              name="serviceNumber"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Price Due</span>
            </label>
            <input
              type="number"
              defaultValue={price}
              name="price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pick a Service date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Write your Message</span>
            </label>
            <input
              type="text"
              name="message"
              placeholder="write here"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Order Confirm</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Checkout;
