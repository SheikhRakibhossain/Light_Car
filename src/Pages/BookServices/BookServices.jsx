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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum reprehenderit sed eum blanditiis iste perferendis nemo illum pariatur explicabo necessitatibus debitis, itaque velit sapiente laudantium delectus sint odio nostrum facilis?</p>
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
              </div>
            </form>
          </div>
        </dialog>
      </section>
    </>
  );
};

export default BookServices;
