import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import registerImg from '../../assets/images/login/login.svg';
import {Link} from 'react-router-dom'


const Register = () => {

    const {createUser} = useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.Uname.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // const { name, photoURL, email, password } = user;
    console.log(name, email, password, photoURL);
    createUser(email, password)
    // .then(res => res.json())
    .then(data =>{
        const users = data.user;
        console.log(users)
    })
    .catch(error=>console.log(error))
  };
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
                    type="text"
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
                    <Link to='/login' className="label-text-alt link link-hover">
                    Already have an account? please <span className="text-orange-600">Log In</span>
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
