"use client";
import React, { useState } from "react";
import styles from "./AdminLoginPage.module.css";
import CustomButton from "@/libraryComponents/customButton/CustomButton";

const AdminLoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleSign = (e: any) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(isChecked);
  };
  return (
    // <div className=" container ">
    //   <h1 className="text-center mb-3 mt-0">Administrator</h1>
    //   <p className="text-center mb-4">
    //     Use your Administrator Accout to sign in
    //   </p>
    //   <label className="mb-5 text-center">Email ID</label>
    //   <form onSubmit={(event) => handleSign(event)}>
    //     <input type="email" required placeholder="Email" />
    //     <input type="password" required placeholder="Password" />
    //     <div>
    //       <input
    //         type="checkbox"
    //         checked={isChecked}
    //         onChange={() => setIsChecked(!isChecked)}
    //       />
    //       <label>Remember me</label>
    //     </div>
    //     <button type="submit">Sign In</button>
    //     <p>
    //       By selecting Sign In, you agree to our <span>Terms</span>
    //       and acknowledge our <span>Privacy Statement</span>.
    //     </p>
    //   </form>
    // </div>
    <div className={`form-box mt-2 ${styles.conatainerWidth}`}>
      <div className="container sign-in-form">
        <div className="text-center mb-3 mt-0">Administrator</div>
        <div className="text-center mb-4">
          Use your Administrator Account to sign in
        </div>
        <form onSubmit={(e) => handleSign(e)}>
          <div className="mb-3 mt-4 text-center">
            <label
              htmlFor="username"
              className={`form-label mb-5 text-center w-50 ${styles.subLabel}`}
            >
              Email ID
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Email ID"
              required
            />

            <input
              type="text"
              className="form-control mt-3"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="remember-forgot">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
          </div>
          {/* <button type="submit" className="btn btn-primary mt-3 w-100 btn-sz">
            Sign In
          </button> */}
          <CustomButton
            type={"submit"}
            children={"Sign In"}
            className="btn btn-primary w-100"
            disabled
          />

          <div className="mt-4 text-center">
            By selecting Sign In, you agree to our
            <span className={`${styles.subTextColor}`}>Terms</span> and
            acknowledge our
            <span className={`${styles.subTextColor}`}> Privacy Statement</span>
            .
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
