import React from "react";
import useTitle from "../hooks/useTitle";
import './login.css'

const Login = () => {
    useTitle('Login')

    return (
        <div>
            <div className="Center">
                <div className="">
                    <form className="form">
                            <h1 className="normal-case text-4xl custom-text font-bold ">Job Hunt</h1>
                        <div className="mb-4">
                            <label htmlFor="exampleInputEmail1" className="">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-5 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button  type="submit" className="btn btn-primary" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login