import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import registerImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const Register = () => {
  const [verify, setVerified] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
  //captha verify function ended

  const { createUser, updateUserProfile, signinGoogle } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.Uname.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // const { name, photoURL, email, password } = user;
    console.log("before register info", name, photoURL);
    createUser(email, password)
      .then((data) => {
        const users = data.user;
        console.log("i users", users);
        updateUserProfile(name, photoURL)
          .then(() => {
            console.log("user profile info updated");
            form.reset("");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Profile has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const googleSignIn = () => {};
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left space-x-20">
            <img src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Register Now!</h1>
              <form onSubmit={handleRegister}>
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
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="URL"
                    name="photoURL"
                    placeholder="Photo URL"
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover"
                    >
                      Already have an account? please{" "}
                      <span className="text-orange-600 font-semibold">
                        Login
                      </span>
                    </Link>
                  </label>
                </div>
                <ReCAPTCHA
                  sitekey="6LeKsGUoAAAAABgdjCVQSUnERYCBwee9YBJGDeqr"
                  onChange={onChange}
                />
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Register"
                    className="btn btn-primary"
                    disabled={!verify}
                  />
                </div>
              </form>
              {/* google sign in btn */}
              <div className="flex justify-center ">
                <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                  <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                  />
                  <span>Login with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
