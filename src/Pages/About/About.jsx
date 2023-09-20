const About = () => {
  const carURL =
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Let{"'"} Know About Us</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* //second section  */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://media.istockphoto.com/id/1344954209/photo/family-with-dog-in-the-car.jpg?s=2048x2048&w=is&k=20&c=49Op5dsAjevwr1NPWtEYthPgXAe0Lz7tVxlLqNibApU="
            className="max-w-sm w-1/2 rounded-lg shadow-2xl"
          />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* view with some car */}
      <div className="space-y-4 py-5">
        <h1 className="text-5xl font-bold text-center">Our Car</h1>
        <p className=" font-bold text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          quia, velit repudiandae quas nostrum cum esse sit? Corporis, tenetur
          expedita!
        </p>
      </div>
      <div className="carousel rounded-box pb-8">
        <div className="carousel-item w-1/3">
          <img src={carURL} alt="Burger" />
        </div>
        <div className="carousel-item w-1/3">
          <img src={carURL} alt="Burger" />
        </div>
        <div className="carousel-item w-1/3">
          <img src={carURL} alt="Burger" />
        </div>
        <div className="carousel-item w-1/3">
          <img src={carURL} alt="Burger" />
        </div>
        <div className="carousel-item w-1/3">
          <img src={carURL} alt="Burger" />
        </div>
        <div className="carousel-item w-1/3">
          <img src={carURL} alt="Burger" />
        </div>
        <div className="carousel-item w-1/3">
          <img src={carURL} alt="Burger" />
        </div>
      </div>
      {/* faq section */}
      <div className="space-y-4">
        <div
          tabIndex={0}
          className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
        >
          <div className="collapse-title">Focus me to see content</div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
        >
          <div className="collapse-title">Focus me to see content</div>
          <div className="collapse-content">
            <p>tabIndex={1} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
        >
          <div className="collapse-title">Focus me to see content</div>
          <div className="collapse-content">
            <p>tabIndex={2} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
        >
          <div className="collapse-title">Focus me to see content</div>
          <div className="collapse-content">
            <p>tabIndex={3} attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
