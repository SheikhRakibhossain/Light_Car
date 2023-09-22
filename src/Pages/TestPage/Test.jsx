const Test = () => {
  const jwtGenerate = () => {
    // console.log('hello generate jwt');
    fetch("http://localhost:5000/gen-jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name: "Rakib&Soanli" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="text-center">
        <h2 className="text-center font-bold py-6 text-orange-500 text-5xl">
          Hello Test page
        </h2>
        <button
          onClick={jwtGenerate}
          type="button"
          className="btn btn-success btn-sm"
        >
          Generate Token For JWT
        </button>
      </div>
    </>
  );
};

export default Test;
