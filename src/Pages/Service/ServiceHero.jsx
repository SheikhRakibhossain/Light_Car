const ServiceHero = () => {
  return (
    
<section
  className="relative bg-[url(https://img.freepik.com/free-photo/couple-searching-new-car-dealership_23-2149117179.jpg?size=626&ext=jpg&ga=GA1.2.28436747.1695030037&semt=ais)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 md:bg-gradient-to-r from-white-200 to-gray-200 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l "
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xxl ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl capitalize">
        Let us find your best and trust

        <strong className="block font-extrabold text-[#f22613]">
          car service center.
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
       We offer you and show prove that our service will be the best and fit for all kinds of car.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-[#f22613] px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  );
};

export default ServiceHero;
