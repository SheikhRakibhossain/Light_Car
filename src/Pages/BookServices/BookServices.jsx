
const BookServices = () => {


  return (
    <>
      <section>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="btn btn-secondary bg-[#f22613] rounded-none text-white hover:bg-[#f23813]"
        >
          Book A Service
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box  min-w-min max-w-5xl">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              {/* form control started form here */}
              <h2 className="text-3xl font-semi-bold text-center pb-4 pt-4">
            <span className="text-black">Need You a</span> <span className="text-[#f22613]">Car Re-pair Service?</span>
          </h2>
              <p>
               Here is a form that you can fill out it with your personal info that repair your car from scratch with the bloombard. We would love to here that it is a best car repair and re-condition center you ever been seen before. So why are you late? We are excited to provide our best service with you.
              </p>
            </form>
            <form>
              <div className="grid md:grid-cols-2 gap-4">
               
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="Uname"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone number</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Type</span>
                  </label>
                  <input
                    type="text"
                    name="serviceType"
                    placeholder="Service type"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Asking Price</span>
                  </label>
                  <input
                    type="number"
                    name="askPrice"
                    placeholder="Ask Price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Most of The Issues</span>
                  </label>
                  <input
                    type="text"
                    name="issues"
                    placeholder="Issues name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Hand Over Rider Name</span>
                  </label>
                  <input
                    type="text"
                    name="handOver"
                    placeholder="Handing Over Rider"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <input type="submit" value="Submit The Request" className="btn bg-[#f22613] mt-4 text-white hover:bg-[#f22613b0] hover:text-black" />
            </form>
      
    </div>
        </dialog>
        {/* fake modal */}
        
      </section>
    </>
  );
};

export default BookServices;
