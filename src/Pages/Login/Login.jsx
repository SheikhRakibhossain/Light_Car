import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/images/login/login.svg'

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/' ;

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const {email, password} = user;
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser) ;
            fetch('http://localhost:5000/jwt',{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data =>{
              console.log(data)
              localStorage.setItem('service-access-token',data.token)
              navigate(from,{replace:true});
            })
            .catch(error =>console.log(error))
        })
        .catch(error =>console.log(error))
    }

  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row md:space-x-20">
          <div className="text-center lg:text-left md:w-1/2">
           <img src={loginImg} alt="login image made by grapich" />
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleLogin}>
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
                  <Link to='/register' className="label-text-alt link link-hover">
                    New here ? Please <span className="text-orange-600">Register </span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Login" className="btn btn-primary" />
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
