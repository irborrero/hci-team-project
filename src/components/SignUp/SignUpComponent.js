import React from "react";
import "./SignUp.style.client.css"
import {Link} from "react-router-dom";

const SignUpComponent = () =>
    <React.Fragment>
        <div className="signup-page">
        <h1 className="white">Sign Up</h1>
        <form className="container-login2">
            <div className="form-group row">
                <label htmlFor="nameFld" className="col-sm-2 col-form-label">
                    Name </label>
                <div className="col-sm-10 ">
                    <input className="form-control wbdv-field wbdv-name"
                           id="nameFld"
                           placeholder="Introduce your name"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="lastNameFld" className="col-sm-2 col-form-label">
                    Last Name </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-lastname"
                           id="lastNameFld"
                           placeholder="Introduce your last name"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="emailFld" className="col-sm-2 col-form-label">
                    Email </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-email"
                           id="lastNameFld"
                           placeholder="Introduce your husky email"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                    Password </label>
                <div className="col-sm-10">
                    <input type="password" className="form-control wbdv-field wbdv-password"
                           id="passwordFld"
                           placeholder="Introduce password"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="verifyPasswordFld" className="col-sm-2 col-form-label">
                    Verify</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control wbdv-field wbdv-password-verify"
                           id="verifyPasswordFld"
                           placeholder="Introduce password again"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> </label>
                <div className="col-sm-10">
                    <Link to="/course-manager">
                        <button id="registerBtn"
                                className="btn btn-outline-danger btn-block">Create Account
                        </button>
                    </Link>
                </div>
            </div>
        </form>


        </div>
    </React.Fragment>


export default SignUpComponent