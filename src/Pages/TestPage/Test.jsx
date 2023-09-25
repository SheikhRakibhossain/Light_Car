import { motion } from "framer-motion";
// import "./styles.css";

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

  //motion effect
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
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
      {/* motion effect */}
      <div className="container">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item"
    >
      <motion.path
        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  </div>
    </>
  );
};
export default Test;
