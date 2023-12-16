"use client";
import React, { useState } from "react";
import styles from "./AdminLoginPage.module.css";
import CustomButton from "@/libraryComponents/customButton/CustomButton";
import CustomInput from "@/libraryComponents/customInput/CustomInput";
import CustomCheckBoxAndRadio from "@/libraryComponents/customCheckBoxAndRadio/CustomCheckBoxAndRadio";

const AdminLoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleSign = (e: any) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(isChecked);
  };
  return (
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
            <CustomInput
              type="email"
              className="form-control"
              id="username"
              name={"username"}
              placeholder={"Email ID"}
              required
            />

            <CustomInput
              type="password"
              className="form-control mt-3"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <CustomCheckBoxAndRadio
            label="test check"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="form-check "
          />
          <CustomButton
            type={"submit"}
            children={"Sign In"}
            className="btn  mt-3 w-100"
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
