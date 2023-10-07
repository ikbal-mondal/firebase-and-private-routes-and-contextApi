import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {

    const { createUser,signInWithGoogle } = useContext(AuthContext);



    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // create user in firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
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
     <div className="grid lg:grid-cols-2 my-12 gap-8 items-center lg:w-[65%] w-[90%] mx-auto">
           <div className="flex justify-center">
            <div className="">
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                 
                        <button onClick={handleGoogleSignIn} className="btn  w-full"> <img className="w-[40px] h-[40px] rounded-full" src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951" alt="" /> login width Google</button>
                        <div className="flex flex-col w-full border-opacity-50">
 
  <div className="divider">OR</div>
  
</div>
  <p className="text-center text-lg font-medium">Register now</p>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="Password" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p> Already have account? Please <Link to="/login">
                            <button className="btn btn-link">Login</button>
                        </Link> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
        <div className="">
            <img src="https://media.istockphoto.com/id/1308383004/vector/vector-illustration-modern-blue-web-banner-with-text-register-now.jpg?s=612x612&w=0&k=20&c=ZE-Hh8T0rpGzzO7dZGK_0GoSj7J9QtDOxh5sPPLACys=" alt="" />
        </div>
        </div>
     </div>
    );
};

export default Register;