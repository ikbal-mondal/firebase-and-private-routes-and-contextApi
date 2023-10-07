import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
      <div className="grid items-center gap-6 my-12 lg:grid-cols-2  lg:w-[60%] w-[90%] mx-auto">
        <div className="justify-center flex">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="" />
        </div>
        <div className="flex justify-center">
            <div className="">
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                   <h2 className="text-3xl font-medium my-2 text-center"> Login Now</h2>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p> New to this site? Please <Link to="/register">
                            <button className="btn btn-link">Register</button>
                        </Link> </p>
                        <button onClick={handleGoogleSignIn} className="btn  w-full"> <img className="w-[40px] h-[40px] rounded-full" src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951" alt="" /> login width Google</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Login;