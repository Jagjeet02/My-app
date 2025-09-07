"use client";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
    return(
        <div className="signup_container">
            <form action="" className="signup_form">
              <Link href="./login"><h4 className="login">Login</h4></Link>
              <h4 className="signup_head">Sign Up</h4>
              <div className="form_inputs">
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
              </div>
              <Link href="./select"><button className="signup_btn primary_btn">Sign Up</button></Link>
              <span className="or-line">OR</span>
              <div className="other_signup_options">
                <Link href=""><img src="./google.png" alt="google" /></Link>
                <Link href=""><img src="./facebook.png" alt="" /></Link>
                <Link href=""><img src="./twitter.png" alt="" /></Link>
              </div>
            </form>
        </div>
    );
}