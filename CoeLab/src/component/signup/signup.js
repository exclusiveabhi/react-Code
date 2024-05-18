import React from "react";
import "./signup.css"
import { Link } from "react-router-dom/dist";

function SignupPage() {

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col col-md-3">

                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                SignUp
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your First name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Last name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
                                </div>
                                <div className="signup-btn">
                                <button type="button" class="btn btn-success">Sign up</button>
                                </div>
                                <Link to="/">Already have an account? Login</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-3">

                    </div>
                </div>
            </div>
        </>
    );
}

export default SignupPage;