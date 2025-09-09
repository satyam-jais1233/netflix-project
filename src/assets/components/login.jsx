import React, { useState } from "react";
import bannerImg from "../image/banners.jpg";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig.jsx";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

// ✅ App initialize ek hi baar hoga
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailOnchangeHandler = (e) => setEmail(e.target.value);
  const passwordOnchangeHandler = (e) => setPassword(e.target.value);

  // 🔹 Sign Up
  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully ✅");
    } catch (error) {
      alert(error.message);
    }
  };

  // 🔹 Sign In
  const handleSignin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
    } catch (error) {
      alert(error.message);
    }
  };

  // 🔹 Forgot Password
  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email first!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent to your email 📧");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black text-light p-5 rounded col-10 col-sm-8 col-md-6 col-lg-4">
        <h2 className="fw-bold mb-4">Sign In</h2>

        <div className="mb-3">
          <input
            value={email}
            onChange={emailOnchangeHandler}
            type="text"
            className="form-control form-control-lg"
            placeholder="Email or mobile number"
          />
        </div>

        <div className="mb-3">
          <input
            value={password}
            onChange={passwordOnchangeHandler}
            type="password"
            className="form-control form-control-lg"
            placeholder="Password"
          />
        </div>

        {/* ✅ Sign In */}
        <button
          onClick={handleSignin}
          className="btn btn-danger w-100 btn-lg mb-3"
        >
          Sign In
        </button>

        <h6 className="text-center mb-3">OR</h6>

        {/* ✅ Sign Up */}
        <button
          onClick={handleSignup}
          className="btn btn-secondary w-100 btn-lg"
        >
          Sign Up
        </button>

        {/* ✅ Forgot Password */}
        <div className="text-center p-3">
          <button
            onClick={handleForgotPassword}
            className="btn btn-link text-white"
          >
            Forgot password?
          </button>
        </div>

        {/* ✅ Remember Me */}
        <div className="d-flex align-items-center gap-2 py-3">
          <input type="checkbox" className="form-check-input mt-0" />
          <span>Remember me</span>
        </div>

        {/* ✅ New to Netflix */}
        <div className="d-flex align-items-start py-2">
          <span>New to Netflix? &nbsp;</span>
          <button
            onClick={handleSignup}
            className="btn btn-link text-white p-0"
          >
            Sign up now.
          </button>
        </div>

        <p className="text-secondary">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <a href="#" className="text-info">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Login;
